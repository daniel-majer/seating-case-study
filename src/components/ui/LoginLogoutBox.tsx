import { ReactNode, forwardRef } from "react";

type LoginLogoutBoxProps = {
  children: ReactNode;
};

export const LoginLogoutBox = forwardRef<HTMLDivElement, LoginLogoutBoxProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute top-10 w-full max-w-60 rounded-lg border border-purple-500 bg-gray-300 px-2 pb-4 pt-2 text-sm text-gray-900 sm:top-14 sm:max-w-80 sm:rounded-xl sm:px-8 sm:text-base"
      >
        {children}
      </div>
    );
  },
);
