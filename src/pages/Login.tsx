import { useUser } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("frontend@nfctron.com");
  const [password, setPassword] = useState("Nfctron2025");
  const navigate = useNavigate();
  const { login, isAuthenticated, isError } = useUser();
  const { tickets, checkout, isCheckout } = useCart();
  const { t } = useTranslation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email, password);
  }

  function handleGuest() {
    checkout();
    navigate("/checkout");
  }

  useEffect(() => {
    async function handleLogin() {
      if (!tickets.length) {
        navigate("/");
        return;
      }
      if (tickets.length > 0 && isAuthenticated && !isCheckout) {
        navigate("/checkout");
        checkout();
      }
    }

    handleLogin();
  }, [isAuthenticated, tickets, navigate, checkout, isCheckout]);

  return (
    <div className="font-poppins flex items-center justify-center text-slate-900">
      <div className="flex min-h-screen w-screen items-center justify-center dark:bg-gray-900">
        <div className="grid gap-8">
          <div
            id="back-div"
            className="m-4 rounded-[26px] bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <div className="m-2 rounded-[20px] border-[20px] border-transparent bg-white shadow-lg dark:bg-gray-900 sm:p-2 md:p-10 lg:p-10 xl:p-10 2xl:p-10">
              <h1 className="cursor-default pb-4 pt-6 text-center text-3xl font-bold dark:text-gray-400 sm:pb-6 sm:pt-8 sm:text-5xl">
                Log in
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  label="email"
                  placeholder="Email"
                  value={email}
                  onSet={setEmail}
                />

                <Input
                  type="password"
                  label="password"
                  placeholder={t("login.password")}
                  value={password}
                  onSet={setPassword}
                />

                <a className="group text-blue-400 transition-all duration-100 ease-in-out">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-sm transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                    {t("login.forget")}
                  </span>
                </a>

                <Button width="full">{t("login.login")}</Button>
                {isError && (
                  <p className="text-red-500">
                    Ups. Vyskytla sa chyba. Skús to znovu.
                  </p>
                )}
              </form>

              {/* ******************************************************************* */}
              <div className="mt-4 flex flex-col items-center justify-center">
                <span>{t("login.or")}</span>
                <h3 onClick={handleGuest} className="dark:text-gray-300">
                  <a className="group text-blue-400 transition-all duration-100 ease-in-out">
                    <span className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-2xl font-bold transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:text-3xl">
                      {t("login.guest")}
                    </span>
                  </a>
                </h3>
              </div>
              <div
                id="third-party-auth"
                className="mt-5 flex flex-wrap items-center justify-center"
              >
                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="Linkedin"
                  />
                </button>
                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="max-w-[25px] filter dark:invert"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="Github"
                  />
                </button>
                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="dark:gray-100 max-w-[25px]"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="twitter"
                  />
                </button>

                <button className="m-1 rounded-lg p-2 shadow-lg duration-300 ease-in-out hover:scale-105">
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                    alt="apple"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
