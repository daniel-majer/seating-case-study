import { ReactNode, forwardRef } from "react";

type BoxProps = {
  children: ReactNode;
  type?: string;
};

const base =
  "absolute top-10 h-60 w-full max-w-60 rounded-lg border border-purple-500 bg-gray-300 px-2 pb-4 pt-2 text-sm text-gray-900 sm:top-14 sm:h-80 sm:max-w-96 sm:rounded-xl sm:px-8 sm:text-base";

const styles = {
  logout: base + " h-fit sm:h-fit",
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, type }, ref) => {
    const classname = type === "logout" ? styles.logout : base;
    return (
      <div ref={ref} className={classname}>
        {children}
      </div>
    );
  },
);
