import { useCart } from "@/contexts/CartContext";
import { ButtonPop } from "./ButtonPop";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type CheckoutFooterProps = {
  sendOrder: () => Promise<void>;
  isLoading: boolean;
};

const MAX_SEC = 300;

export const CheckoutFooter = ({
  sendOrder,
  isLoading,
}: CheckoutFooterProps) => {
  const { totalPrice, tickets, clearCart, setIsCheckout } = useCart();
  const { t } = useTranslation();
  const [sec, setSec] = useState(MAX_SEC);
  const navigate = useNavigate();

  const minutes = Math.floor(sec / 60);
  const remainingSecs = sec % 60;

  useEffect(
    function () {
      const timer = setInterval(() => {
        setSec((s) => s - 1);
      }, 1000);

      if (sec === 0) {
        navigate("/");
        setIsCheckout();
        clearCart();
      }

      return () => clearInterval(timer);
    },
    [sec, navigate, clearCart, setIsCheckout],
  );

  return (
    <div className="bottom-0 left-0 right-0 flex w-full justify-between self-center rounded-xl bg-white transition duration-500 dark:bg-slate-500 dark:text-white">
      {/* inner content */}
      <div className="flex grow items-center justify-between gap-4 p-6">
        {/* total in cart state */}
        <div className="flex flex-col text-base sm:text-2xl">
          <span>
            {t("footer.total", {
              count: tickets.length,
            })}
          </span>
          <span className="font-semibold">{totalPrice} CZK</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="w-8 font-semibold">{`${minutes < 10 ? "0" + minutes : minutes}:${remainingSecs < 10 ? "0" + remainingSecs : remainingSecs}`}</span>

          {/* checkout button */}
          <ButtonPop
            className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-500 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-white"
            variant="default"
            onClick={() => {
              if (!isLoading) {
                sendOrder();
              }
            }}
            disabled={isLoading}
          >
            {t("footer.checkoutBtn.order")}
          </ButtonPop>
        </div>
      </div>
    </div>
  );
};
