import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  place?: "box";
};

const base =
  "rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-1 text-xs text-white transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-gray-300 sm:text-base ";

const styles = {
  box: base + " w-full text-base py-2 sm:text-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, place, ...props }, ref) => {
    const className = place === "box" ? styles.box : base;
    return (
      <button ref={ref} {...props} className={className}>
        {children}
      </button>
    );
  },
);
