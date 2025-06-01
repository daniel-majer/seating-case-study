import { type ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  type?: "logout" | "cart" | "login";
};

const base =
  "absolute top-10 w-full max-w-60 rounded-lg border border-purple-300 bg-gray-300 dark:bg-slate-900 transition duration-500 px-2 pb-4 pt-2 text-sm text-gray-900 dark:text-white sm:top-14 sm:max-w-96 sm:rounded-xl sm:px-8 sm:text-base";

const styles = {
  logout: base + " h-fit",
  cart: base + " max-w-[300px] sm:max-w-[500px] h-fit",
  login: base + "  h-fit min-h-60 sm:min-h-80 grid place-items-center",
};

export const Box = ({ children, type }: BoxProps) => {
  const classname = type ? styles[type] : base;
  return <div className={`box ${classname}`}>{children}</div>;
};
