import { useUser } from "@/contexts/AuthContext";
import { ChevronDown, CircleUserRound } from "lucide-react";
import { Box } from "./Box";
import { Button } from "./Button";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export const Greet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useUser();
  const { isCheckout, setIsCheckout } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  useOutsideClick({
    setIsOpen,
    isOpen,
    ignoredClasses: ["login", "box"],
  });

  const handleToggleLog = () => {
    setIsOpen((prev) => !prev);
  };

  function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isCheckout) {
      navigate("/");
      setIsCheckout();
    }
    setIsOpen(false);
    logout();
  }

  return (
    <>
      <div
        onClick={handleToggleLog}
        className="login flex cursor-pointer items-center sm:gap-1"
      >
        <CircleUserRound
          className="h-6 w-6 text-[#3B0764] transition-all duration-500 dark:text-white sm:h-8 sm:w-8"
          strokeWidth={1}
        />
        <span className="hidden text-xs text-black transition-all duration-500 dark:text-white sm:block sm:text-base">
          Hello, {user?.firstName}
        </span>
        <ChevronDown
          className="h-6 w-6 cursor-pointer text-[#3B0764] transition-all duration-500 dark:text-white"
          strokeWidth={1}
        />
      </div>

      {isOpen && (
        <Box type="logout">
          <span className="mb-2 inline-block break-all">{user?.email}</span>
          <Button width="full" onClick={handleLogout}>
            {t("log.logout")}
          </Button>
        </Box>
      )}
    </>
  );
};
