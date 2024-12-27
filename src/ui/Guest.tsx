import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const Guest = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleGuest() {
    navigate("/checkout");
  }

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <span>{t("login.or")}</span>
      <h3 onClick={handleGuest} className="text-center dark:text-gray-300">
        <a className="group text-blue-400 transition-all duration-100 ease-in-out">
          <span className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-2xl font-bold transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:text-3xl">
            {t("login.guest")}
          </span>
        </a>
      </h3>
    </div>
  );
};
