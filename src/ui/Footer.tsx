import { useCart } from "@/contexts/CartContext";
import { ButtonPop } from "./ButtonPop";
import { useUser } from "@/contexts/AuthContext";
import { useNavigate } from "react-router";

export const Footer = () => {
  const { totalPrice, tickets, isCheckout, checkout } = useCart();
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  function handleCheckout() {
    if (!isAuthenticated) return navigate("/login");
    checkout();
    navigate("/checkout");
  }

  function handleOrder() {
    console.log("hey");
  }

  if (!tickets.length || isCheckout) return "";

  return (
    <footer className="sticky bottom-0 left-0 right-0 flex justify-center border-t border-zinc-200 bg-white transition-all duration-500 ease-in-out">
      {/* inner content */}
      <div className="flex max-w-screen-lg grow items-center justify-between gap-4 p-6">
        {/* total in cart state */}
        <div className="flex flex-col">
          <span>
            Total for {tickets.length}
            {tickets.length === 1 ? " ticket" : "tickets"}
          </span>
          <span className="text-2xl font-semibold">{totalPrice} CZK</span>
        </div>

        {/* checkout button */}
        <ButtonPop
          className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-gray-300"
          variant="default"
          onClick={isCheckout ? handleOrder : handleCheckout}
        >
          {isCheckout ? "Order now" : "Checkout now"}
        </ButtonPop>
      </div>
    </footer>
  );
};
