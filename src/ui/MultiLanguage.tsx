import "../utils/i18n";
import { Globe } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export const LangIcon = () => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("i18nextLng") || "cz",
  );
  const { i18n } = useTranslation();

  function changeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value);
    setLang(e.target.value);
  }

  return (
    <div className="relative flex h-6 cursor-pointer items-center rounded-full bg-gray-200 px-2 transition duration-300 hover:scale-105 sm:h-8">
      <label className="cursor-pointer" htmlFor="lang">
        <Globe color="#3B0764" strokeWidth={2} size={16} />
      </label>
      <select
        id="lang"
        className="h-full cursor-pointer rounded-full bg-inherit text-xs text-[#3B0764] focus:outline-none sm:text-base"
        onChange={changeLanguage}
        value={lang}
      >
        <option value="cz">CZ</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
};
