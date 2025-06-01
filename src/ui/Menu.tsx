import { useUser } from "@/contexts/AuthContext";

import { Greet } from "./Greet";
import { Cart } from "./Cart";
import { MultiLanguage } from "./MultiLanguage";
import { DarkTheme } from "./DarkTheme";
import { LoginMenu } from "./LoginMenu";

export const Menu = () => {
  const { isAuthenticated } = useUser();

  return (
    <>
      <MultiLanguage />
      <DarkTheme />
      <Cart />

      {isAuthenticated ? (
        <>
          <Greet />
        </>
      ) : (
        <LoginMenu />
      )}
    </>
  );
};
