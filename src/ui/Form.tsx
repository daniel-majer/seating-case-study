import { useUser } from "@/contexts/AuthContext";
import { Button } from "./Button";
import { Input } from "./Input";
import { FormEvent, useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("frontend@nfctron.com");
  const [password, setPassword] = useState("Nfctron2025");

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
        placeholder="Password"
      />
      <a
        className="group text-blue-400 transition-all duration-100 ease-in-out"
        href="#"
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-xs transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:text-sm">
          Forget your password?
        </span>
      </a>
      <Button width="full">Login</Button>
    </form>
  );
};
