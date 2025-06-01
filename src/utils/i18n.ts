import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "../utils/i18n/en.json";
import czLang from "../utils/i18n/cs.json";
import frLang from "../utils/i18n/fr.json";
import deLang from "../utils/i18n/de.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      cz: {
        translation: czLang,
      },
      en: {
        translation: enLang,
      },
      fr: {
        translation: frLang,
      },
      de: {
        translation: deLang,
      },
    },
  });

export default i18n;
