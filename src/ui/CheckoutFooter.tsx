import { useCart } from "@/contexts/CartContext";
import { ButtonPop } from "./ButtonPop";
import { useTranslation } from "react-i18next";

type CheckoutFooterProps = {
  sendOrder: () => Promise<void>;
};

export const CheckoutFooter = ({ sendOrder }: CheckoutFooterProps) => {
  const { totalPrice, tickets } = useCart();
  const { t } = useTranslation();

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

        {/* checkout button */}
        <ButtonPop
          className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-500 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-white"
          variant="default"
          onClick={sendOrder}
        >
          {t("footer.checkoutBtn.order")}
        </ButtonPop>
      </div>
    </div>
  );
};
