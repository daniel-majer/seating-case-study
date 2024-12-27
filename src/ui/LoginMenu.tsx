import { Button } from "./Button";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { LoginForm } from "./LoginForm";
import { Box } from "./Box";
import { Loader } from "./Loader";

export const LoginMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isError, resetError } = useUser();
  const { t } = useTranslation();
  useOutsideClick({
    setIsOpen,
    isOpen,
    ignoredClasses: ["login", "box"],
  });

  const handleToggleLog = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isError && !isOpen) resetError();
  }, [isError, resetError, isOpen]);

  return (
    <>
      <Button onClick={handleToggleLog}> {t("log.login")}</Button>
      {isOpen && (
        <Box type="login">
          {isLoading && !isError ? <Loader /> : <LoginForm />}
          {isError && <p className="pt-2 text-red-500"> {t("log.error")}</p>}
        </Box>
      )}
    </>
  );
};
