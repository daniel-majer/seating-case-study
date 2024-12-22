import { Globe } from "lucide-react";

export const LangIcon = () => {
  return (
    <div className="relative flex h-6 cursor-pointer items-center rounded-full bg-gray-200 px-2 transition duration-300 hover:scale-105 sm:h-8">
      <label className="cursor-pointer" htmlFor="lang">
        <Globe color="#3B0764" strokeWidth={2} size={16} />
      </label>
      <select
        id="lang"
        className="h-full cursor-pointer rounded-full bg-inherit text-xs text-[#3B0764] focus:outline-none sm:text-base"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
        <option value="cz">CZ</option>
      </select>
    </div>
  );
};
