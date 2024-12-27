import { useEffect } from "react";

type UseOutsideClickProps = {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  ignoredClasses: string[];
};

export const useOutsideClick = ({
  setIsOpen,
  isOpen,
  ignoredClasses,
}: UseOutsideClickProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      const isIgnored = ignoredClasses.some((className) =>
        target.closest(`.${className}`),
      );

      if (!isIgnored) {
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
