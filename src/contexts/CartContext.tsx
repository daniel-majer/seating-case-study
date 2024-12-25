import { createContext, type ReactNode, useContext, useReducer } from "react";
/*   {
      eventId: string,
      seatId: string,
      ticketTypeId: string
      price: number,
      row: number,
      seat: number,
      currency: string,
      typeName: string
    };*/

type CartContextType = {
  tickets: Ticket[];
  totalPrice?: number;
  isCheckout: boolean;
  addItem: (item: Ticket) => void;
  deleteItem: (id: string) => void;
  clearCart: () => void;
  checkout: () => void;
};

type Ticket = {
  eventId?: string;
  seatId?: string;
  ticketTypeId?: string | false;
  price?: number | false;
  row?: number;
  seat?: number;
  currency?: string;
  typeName?: string;
};

type CartState = {
  tickets: Ticket[];
  isCheckout: boolean;
};

type CartAction =
  | {
      type: "add";
      payload: Ticket;
    }
  | { type: "delete"; payload: string }
  | { type: "reset" }
  | { type: "checkout" };

const initState: CartState = {
  tickets: [],
  isCheckout: false,
};

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "delete":
      return {
        ...state,
        tickets: state.isCheckout
          ? state.tickets
          : state.tickets.filter((t) => t.seatId !== action.payload),
      };
    case "checkout":
      return { ...state, isCheckout: !state.isCheckout };
    case "reset":
      return state.isCheckout ? state : initState;
    default:
      throw new Error("Unknown action");
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [{ tickets, isCheckout }, dispatch] = useReducer(reducer, initState);

  const totalPrice = tickets.reduce((acc, curr) => {
    if (typeof curr.price === "number") {
      return acc + curr.price;
    }
    return acc;
  }, 0);

  function addItem(item: Ticket) {
    dispatch({ type: "add", payload: item });
  }

  function deleteItem(id: string) {
    dispatch({ type: "delete", payload: id });
  }

  function clearCart() {
    dispatch({ type: "reset" });
  }

  function checkout() {
    dispatch({ type: "checkout" });
  }

  return (
    <CartContext.Provider
      value={{
        tickets,
        totalPrice,
        addItem,
        deleteItem,
        clearCart,
        checkout,
        isCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the AuthProvider");
  return context;
}

export { useCart, CartProvider };
