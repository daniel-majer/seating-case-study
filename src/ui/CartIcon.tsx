import { ShoppingCart } from "lucide-react";
import { forwardRef } from "react";

type CartIconProps = {
  onSetCart: () => void;
};

export const CartIcon = forwardRef<HTMLButtonElement, CartIconProps>(
  ({ onSetCart }, ref) => {
    return (
      <button
        onClick={onSetCart}
        ref={ref}
        className="relative mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:mr-0 sm:h-8 sm:w-8"
      >
        <ShoppingCart color="#3B0764" strokeWidth={2} size={16} />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-purple-700 text-xs text-white sm:-right-1 sm:-top-1">
          10
        </span>
      </button>
    );
  },
);
