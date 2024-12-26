/* import { useUser } from "@/contexts/AuthContext";
 */ import { useCart } from "@/contexts/CartContext";

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  width?: "full";
};

const base =
  "sm:rounded-lg rounded-md p-1 sm:px-4 px-1 text-xs text-white transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 sm:text-base dark:text-white";

const styles = {
  full: base + " w-full text-base py-3 sm:text-xl",
};

export const Button = ({ children, width, ...props }: ButtonProps) => {
  const { isCheckout } = useCart();

  const baseStyle = width ? styles[width] : base;

  const dynamicClass =
    width === "full"
      ? "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
      : isCheckout && width === "full"
        ? "cursor-not-allowed bg-gray-400 hover:scale-100"
        : "cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105";
  const className = `${baseStyle} ${dynamicClass}`;

  return (
    <button {...props} className={`login ${className}`}>
      {children}
    </button>
  );
};
