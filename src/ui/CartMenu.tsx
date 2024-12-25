import { Trash2 } from "lucide-react";
import { Button } from "./Button";
import { useCart } from "@/contexts/CartContext";

export const CartMenu = () => {
  const { tickets, totalPrice, deleteItem, clearCart, isCheckout } = useCart();

  if (!tickets.length)
    return (
      <p className="py-4 text-center">
        Your cart is currently empty. <br /> Start{" "}
        <strong>shopping now!</strong>
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
              <strong className="w sm:w-28">{ticket.typeName}</strong>
              <span className="px-2">
                Row: <strong>{ticket.row}</strong> | Seat:{" "}
                <strong>{ticket.seat}</strong>
              </span>
              <span className="px-2">
                Price:
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
          Clear cart
        </Button>
        <span className="sm:mr-11">
          Summary: <strong>{totalPrice} CZK</strong>
        </span>
      </div>
    </>
  );
};
