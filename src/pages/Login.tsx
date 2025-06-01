import { useUser } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Guest } from "@/ui/Guest";
import { Loader } from "@/ui/Loader";
import { LoginForm } from "@/ui/LoginForm";
import { SocialIcons } from "@/ui/SocialIcons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router";

const Login = () => {
  const { isAuthenticated, isError, resetError, isLoading } = useUser();
  const { tickets } = useCart();
  const { t } = useTranslation();

  useEffect(() => {
    resetError();
  }, [resetError]);

  if (!tickets.length) {
    return <Navigate to="/" replace />;
  }

  if (tickets.length > 0 && isAuthenticated) {
    return <Navigate to="/checkout" replace />;
  }

  return (
    <div className="font-poppins flex items-center justify-center text-slate-900">
      <div className="flex min-h-screen w-screen items-center justify-center dark:bg-gray-900">
        <div className="grid w-full max-w-[480px] gap-8">
          <div
            id="back-div"
            className="m-4 rounded-[26px] bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <div className="m-2 h-[600px] rounded-[20px] border-[20px] border-transparent bg-white shadow-lg dark:bg-gray-900 sm:h-[730px] sm:p-2 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <h1 className="cursor-default pb-4 pt-6 text-center text-3xl font-bold text-blue-600 dark:text-gray-400 sm:pb-6 sm:text-5xl">
                    Log in
                  </h1>

                  <LoginForm />

                  {isError && <p className="text-red-500">{t("log.error")}</p>}

                  <Guest />

                  <SocialIcons />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
