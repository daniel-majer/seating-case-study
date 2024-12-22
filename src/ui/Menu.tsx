import { useRef, useState, useEffect } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useUser } from "@/contexts/AuthContext";

import { LoginGreet } from "./LoginGreet";
import { Box } from "./Box";
import { Form } from "./Form";
import { CartIcon } from "./CartIcon";
import { LangIcon } from "./LangIcon";
import { ThemeIcon } from "./ThemeIcon";
import { Button } from "./Button";
import { CartMenu } from "./CartMenu";
import { Loader } from "./Loader";

export const Menu = () => {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const loginBoxRef = useRef<HTMLDivElement>(null);
  const loginBtnRef = useRef<HTMLButtonElement>(null);
  const logoutDivRef = useRef<HTMLDivElement>(null);
  const logoutBoxRef = useRef<HTMLDivElement>(null);
  const cartBoxRef = useRef<HTMLDivElement>(null);
  const cartBtnRef = useRef<HTMLButtonElement>(null);

  const { user, isAuthenticated, isLoading, logout, isError } = useUser();

  useEffect(
    function () {
      if (user) setIsOpenLog((toggle) => !toggle);
    },
    [user],
  );

  useOutsideClick({
    boxRef: loginBoxRef,
    refButton: loginBtnRef,
    setIsOpen: setIsOpenLog,
    isOpen: isOpenLog,
  });
  useOutsideClick({
    boxRef: logoutBoxRef,
    refButton: logoutDivRef,
    setIsOpen: setIsOpenLog,
    isOpen: isOpenLog,
  });

  useOutsideClick({
    boxRef: cartBoxRef,
    refButton: cartBtnRef,
    setIsOpen: setIsOpenCart,
    isOpen: isOpenCart,
  });

  const handleToggleLog = () => {
    if (isOpenCart) setIsOpenCart(false);
    setIsOpenLog((prev) => !prev);
  };

  const handleToggleCart = () => {
    setIsOpenCart((prev) => !prev);
  };

  function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    logout();
  }

  return (
    <>
      <LangIcon />
      <ThemeIcon />
      <CartIcon onSetCart={handleToggleCart} ref={cartBtnRef} />

      {isOpenCart && (
        <Box ref={cartBoxRef}>
          <CartMenu />
        </Box>
      )}

      {isAuthenticated ? (
        <>
          <LoginGreet onSetToggle={handleToggleLog} ref={logoutDivRef} />

          {isOpenLog && (
            <Box type="logout" ref={logoutBoxRef}>
              <span className="mb-2 inline-block break-all">{user?.email}</span>
              <Button place="box" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          )}
        </>
      ) : (
        <>
          <Button onClick={handleToggleLog} ref={loginBtnRef}>
            Login
          </Button>
          {isOpenLog && (
            <Box ref={loginBoxRef}>
              {isLoading && !isError ? <Loader /> : <Form />}
              {isError && <p className="pt-2">Ups. Vyskytla sa chyba. Skús znovu.</p>}
            </Box>
          )}
        </>
      )}
    </>
  );
};
/* 
    {
      "id": "12b7b37f-6ee2-4513-ac40-b55eb676319b",
      "name": "Regular ticket",
      "price": 1000
      "seatRow": 1,
      "place": 1,
    }
*/
