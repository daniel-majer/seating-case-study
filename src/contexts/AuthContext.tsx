import { apiAuth } from "@/services/apiAuth";
import {
  useReducer,
  createContext,
  useContext,
  type ReactNode,
  useCallback,
} from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
};

type AuthAction =
  | {
      type: "login";
      payload: User;
    }
  | { type: "logout" }
  | { type: "loading" }
  | { type: "rejected" }
  | { type: "resetError" };

type AuthContextType = AuthState & {
  login: (email: string, password: string) => void;
  logout: () => void;
  resetError: () => void;
};

const initState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
};

function reducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false, isError: false };
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, isError: true };
    case "resetError":
      return { ...state, isLoading: false, isError: false };
    default:
      throw new Error("Unknown action");
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [{ user, isAuthenticated, isLoading, isError }, dispatch] = useReducer(
    reducer,
    initState,
  );

  async function login(email: string, password: string) {
    dispatch({ type: "loading" });
    try {
      const data = await apiAuth({ email, password });

      dispatch({ type: "login", payload: data?.user });
    } catch (err) {
      dispatch({ type: "rejected" });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  const resetError = useCallback(() => {
    dispatch({ type: "resetError" });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isError,
        resetError,
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useUser() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of the AuthProvider");
  return context;
}

export { useUser, AuthProvider };
