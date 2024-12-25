import { useState, useEffect } from "react";
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
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router";

export const Menu = () => {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const { user, isAuthenticated, isLoading, logout, isError } = useUser();
  const { checkout, isCheckout } = useCart();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) setIsOpenLog(() => false);
    },
    [isAuthenticated],
  );

  useOutsideClick({
    setIsOpenLog,
    isOpenLog,
    isOpenCart,
    setIsOpenCart,
  });

  const handleToggleLog = () => {
    if (isOpenCart) setIsOpenCart(false);
    setIsOpenLog((prev) => !prev);
  };

  const handleToggleCart = () => {
    if (isOpenLog) setIsOpenLog(false);
    setIsOpenCart((prev) => !prev);
  };

  function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isCheckout) {
      navigate("/");
      checkout();
    }

    setIsOpenLog(false);
    logout();
  }

  return (
    <>
      <LangIcon />
      <ThemeIcon />
      <CartIcon onSetCart={handleToggleCart} />

      {isOpenCart && (
        <Box type="cart">
          <CartMenu />
        </Box>
      )}

      {isAuthenticated ? (
        <>
          <LoginGreet onSetToggle={handleToggleLog} />

          {isOpenLog && (
            <Box type="logout">
              <span className="mb-2 inline-block break-all">{user?.email}</span>
              <Button width="full" onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          )}
        </>
      ) : (
        <>
          <Button  onClick={handleToggleLog}>
            Login
          </Button>
          {isOpenLog && (
            <Box type="login">
              {isLoading && !isError ? <Loader /> : <Form />}
              {isError && (
                <p className="pt-2">Ups. Vyskytla sa chyba. Skús znovu.</p>
              )}
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
