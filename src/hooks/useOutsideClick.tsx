import { useEffect } from "react";

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
      if (
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
