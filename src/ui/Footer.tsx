import { useCart } from "@/contexts/CartContext";
import { ButtonPop } from "./ButtonPop";
import { useUser } from "@/contexts/AuthContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { totalPrice, tickets, isCheckout } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleCheckout() {
    if (!isAuthenticated) return navigate("/login");

    navigate("/checkout");
  }

  if (!tickets.length || isCheckout) return "";

  return (
    <footer className="sticky bottom-0 left-0 right-0 z-[100] flex justify-center border-t border-zinc-200 bg-white transition-all duration-500 ease-in-out dark:border-slate-400 dark:bg-slate-600 dark:text-white">
      {/* inner content */}
      <div className="flex max-w-screen-xl grow items-center justify-between gap-4 p-2 sm:p-6">
        {/* total in cart state */}
        <div className="flex flex-col text-sm sm:text-base">
          <span>
            {t("footer.total", {
              count: tickets.length,
            })}
          </span>
          <span className="text-xl font-semibold sm:text-2xl">
            {totalPrice} CZK
          </span>
        </div>

        {/* checkout button */}
        <ButtonPop
          className="h-8 bg-gradient-to-r from-blue-500 to-purple-500 px-2 text-xs transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-white sm:h-10 sm:px-4 sm:py-2 sm:text-sm"
          variant="default"
          onClick={handleCheckout}
        >
          Checkout
        </ButtonPop>
      </div>
    </footer>
  );
};
