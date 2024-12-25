import { useEffect } from "react";

type UseOutsideClickProps = {
  setIsOpenLog: (value: boolean) => void;
  isOpenLog: boolean;
  setIsOpenCart: (value: boolean) => void;
  isOpenCart: boolean;
};

export const useOutsideClick = ({
  setIsOpenLog,
  isOpenLog,
  setIsOpenCart,
  isOpenCart,
}: UseOutsideClickProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        !target.closest(".login") &&
        !target.closest(".cart") &&
        !target.closest(".box") &&
        !target.closest(".delete")
      ) {
        setIsOpenLog(false);
        setIsOpenCart(false);
      }
    };

    if (isOpenLog || isOpenCart) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpenLog, isOpenCart]);
};

/* import { useEffect } from "react";

type UseOutsideClickProps = {
  boxRef: React.RefObject<HTMLElement>;
  refButton: React.RefObject<HTMLElement>;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
};

export const useOutsideClick = ({
  boxRef,
  refButton,
  setIsOpen,
  isOpen,
}: UseOutsideClickProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (
        !target.closest(".icon") &&
        boxRef.current &&
        refButton.current &&
        !refButton.current.contains(event.target as Node) &&
        !boxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
};
 */
