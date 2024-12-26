import { Trash2 } from "lucide-react";
import { Button } from "./Button";
import { useCart } from "@/contexts/CartContext";
import { Trans, useTranslation } from "react-i18next";

export const CartMenu = () => {
  const { tickets, totalPrice, deleteItem, clearCart, isCheckout } = useCart();
  const { t } = useTranslation();

  if (!tickets.length)
    return (
      <p className="py-4 text-center">
        <Trans
          i18nKey="cartMenu.empty"
          components={{
            br: <br />,
            strong: <strong />,
          }}
        />
      </p>
    );

  return (
    <>
      <ul className="mb-2 divide-y divide-purple-500 text-xs sm:mb-5 sm:text-base">
        {tickets.map((ticket) => {
          return (
            <li
              key={ticket.seatId}
              className="flex items-center justify-between py-1"
            >
              <strong className="flex-1">
                {ticket.typeName === "VIP ticket"
                  ? t("cartMenu.name2", { name: ticket.typeName })
                  : t("cartMenu.name", { name: ticket.typeName })}
              </strong>
              <span className="px-2 ">
                {t("cartMenu.row")}: <strong>{ticket.row}</strong> |{" "}
                {t("cartMenu.seat")}:<strong>{ticket.seat}</strong>
              </span>
              <span className="px-2">
                {t("cartMenu.price")}:
                <strong>
                  {ticket.price}
                  CZK
                </strong>
              </span>
              <Trash2
                className={`delete w-4 sm:w-6 ${isCheckout ? "cursor-not-allowed text-gray-400" : "cursor-pointer text-red-500"}`}
                size={16}
                strokeWidth={2}
                onClick={() => deleteItem(ticket.seatId ? ticket.seatId : "")}
              />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between text-xs sm:text-base">
        <Button
          style={
            isCheckout
              ? {
                  backgroundImage: "none",
                  backgroundColor: "rgb(156 163 175)",
                  cursor: "not-allowed",
                  transform: "scale(1)",
                }
              : {}
          }
          onClick={clearCart}
        >
          {t("cartMenu.clear")}
        </Button>
        <span className="sm:mr-11">
          {t("cartMenu.summary")}: <strong>{totalPrice} CZK</strong>
        </span>
      </div>
    </>
  );
};
