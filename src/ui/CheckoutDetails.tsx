import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";

export const CheckoutDetails = () => {
  const { tickets } = useCart();
  const { t } = useTranslation();

  return (
    <div className="mb-10 w-full flex-1 self-center pt-6 transition duration-500 dark:text-white sm:mb-14 sm:pt-8">
      <h3 className="mb-2 text-3xl sm:mb-6 sm:text-4xl">
        {t("checkout.order")}
      </h3>

      <ul className="mb-2 divide-y text-sm sm:mb-5 sm:text-xl">
        {tickets.map((ticket) => {
          return (
            <li
              key={ticket.seatId}
              className="flex items-center justify-between py-1"
            >
              <strong className="flex-1 sm:w-28">
                {ticket.typeName === "VIP ticket"
                  ? t("cartMenu.name2", { name: ticket.typeName })
                  : t("cartMenu.name", { name: ticket.typeName })}
              </strong>
              <span className="flex-1 px-2">
                {t("cartMenu.row")}: <strong>{ticket.row}</strong> |{" "}
                {t("cartMenu.seat")}:<strong>{ticket.seat}</strong>
              </span>
              <span className="px-2">
                {t("cartMenu.price")}:
                <strong className="flex-1">
                  {` ${ticket.price} ${ticket.currency}`}
                </strong>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
