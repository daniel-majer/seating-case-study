import useDarkTheme from "@/hooks/useDarkTheme";
import { Moon, Sun } from "lucide-react";

export const DarkTheme = () => {
  const [isDarkTheme, handleTheme] = useDarkTheme();

  return (
    <button
      onClick={() => handleTheme()}
      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:h-8 sm:w-8"
    >
      {isDarkTheme ? (
        <Sun color="#3B0764" strokeWidth={2} size={16} />
      ) : (
        <Moon color="#3B0764" strokeWidth={2} size={16} />
      )}
    </button>
  );
};
