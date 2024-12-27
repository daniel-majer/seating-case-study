import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

type CheckoutProps = {
  children: ReactNode;
  isError: boolean;
};
export const CheckoutForm = ({ children, isError }: CheckoutProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col self-center border-b border-slate-400 pb-8 sm:flex-col sm:pb-10">
      <h2 className="mb-8 text-5xl transition duration-500 dark:text-white sm:mb-12 sm:text-7xl">
        Checkout
      </h2>
      <div className="flex flex-col justify-between gap-4 transition duration-500 dark:text-white sm:flex-row sm:pb-6">
        {children}
      </div>
      {isError && <p className="text-lg text-red-500">{t("checkout.email")}</p>}
    </div>
  );
};
