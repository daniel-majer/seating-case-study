import { ChevronDown, CircleUserRound } from "lucide-react";

type LoginGreet = {
  onSetToggle: () => void;
};
export const LoginGreet = ({ onSetToggle }: LoginGreet) => {
  return (
    <div
      onClick={() => onSetToggle()}
      className="flex cursor-pointer items-center sm:gap-1"
    >
      <CircleUserRound
        className="h-6 w-6 sm:h-8 sm:w-8"
        color="#3B0764"
        strokeWidth={1}
      />
      <span className="hidden text-xs text-black sm:block sm:text-base">
        Hello, John
      </span>
      <ChevronDown
        className="h-6 w-6 cursor-pointer"
        color="#3B0764"
        strokeWidth={1}
      />
    </div>
  );
};
