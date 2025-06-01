import { useUser } from "@/contexts/AuthContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const { login } = useUser();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = "frontend@nfctron.com";
    const password = "Nfctron2025";
    login(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <Input
        defaultValue="frontend@nfctron.com"
        label="email"
        type="email"
        placeholder="Email"
        onSet={setEmail}
      />
      <Input
        defaultValue="Nfctron2025"
        label="password"
        type="password"
        placeholder={t("login.password")}
        onSet={setPassword}
      />
      <a
        className="group text-blue-400 transition-all duration-100 ease-in-out"
        href="#"
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-xs transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:text-sm">
          {t("login.forget")}
        </span>
      </a>
      <Button width="full">{t("login.login")}</Button>
    </form>
  );
};
