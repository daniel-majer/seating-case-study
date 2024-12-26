import { useUser } from "@/contexts/AuthContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const [email, setEmail] = useState("frontend@nfctron.com");
  const [password, setPassword] = useState("Nfctron2025");
  const { t } = useTranslation();

  const { login } = useUser();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        value={email}
        label="email"
        onSet={setEmail}
        type="email"
        placeholder="Email"
      />
      <Input
        value={password}
        onSet={setPassword}
        label="password"
        type="password"
        placeholder={t("login.password")}
      />
      <a
        className="group text-blue-400 transition-all duration-100 ease-in-out"
        href="#"
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-xs transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] dark:from-blue-700 dark:text-blue-700 dark:to-blue-700 sm:text-sm">
          {t("login.forget")}
        </span>
      </a>
      <Button width="full">{t("login.login")}</Button>
    </form>
  );
};
