import { Input } from "./Input";
import { LoginLogoutBtn } from "./LoginLogoutBtn";

export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <a
        className="group text-blue-400 transition-all duration-100 ease-in-out"
        href="#"
      >
        <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-xs transition-all duration-500 ease-out group-hover:bg-[length:100%_2px] sm:text-sm">
          Forget your password?
        </span>
      </a>
      <LoginLogoutBtn type="submit" place="box">
        Login
      </LoginLogoutBtn>
    </form>
  );
};
