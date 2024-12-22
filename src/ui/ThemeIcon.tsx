import { Moon } from "lucide-react";

export const ThemeIcon = () => {
  return (
    <button className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:h-8 sm:w-8">
      <Moon color="#3B0764" strokeWidth={2} size={16} />
    </button>
  );
};
