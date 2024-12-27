import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { CartMenu } from "./CartMenu";
import { Box } from "./Box";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClick({
    setIsOpen,
    isOpen,
    ignoredClasses: ["cart", "box", "delete"],
  });

  const { tickets } = useCart();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="cart relative mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:mr-0 sm:h-8 sm:w-8"
      >
        <ShoppingCart color="#3B0764" strokeWidth={2} size={16} />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-purple-700 text-xs text-white sm:-right-1 sm:-top-1">
          {tickets.length}
        </span>
      </button>

      {isOpen && (
        <Box type="cart">
          <CartMenu />
        </Box>
      )}
    </>
  );
};
