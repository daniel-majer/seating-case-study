import { ShoppingCart, Moon, Globe } from "lucide-react";

import { LoginLogoutBtn } from "./LoginLogoutBtn";
import { LoginGreet } from "./LoginGreet";
import { LoginLogoutBox } from "./LoginLogoutBox";
import { Form } from "./Form";
import { useEffect, useRef, useState } from "react";

export const Menu = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const isLogged = false;

  const handleToggle = () => {
    setToggleLogin((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        boxRef.current &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node) &&
        !boxRef.current.contains(event.target as Node)
      ) {
        setToggleLogin(false);
      }
      console.log(event.target, btnRef);
    };

    if (toggleLogin) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleLogin]);

  return (
    <>
      <div className="relative flex h-6 cursor-pointer items-center rounded-full bg-gray-200 px-2 transition duration-300 hover:scale-105 sm:h-8">
        <label className="cursor-pointer" htmlFor="lang">
          <Globe color="#3B0764" strokeWidth={2} size={16} />
        </label>
        <select
          id="lang"
          className="h-full cursor-pointer rounded-full bg-inherit text-xs text-[#3B0764] focus:outline-none sm:text-base"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
          <option value="cz">CZ</option>
        </select>
      </div>

      <button className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:h-8 sm:w-8">
        <Moon color="#3B0764" strokeWidth={2} size={16} />
      </button>

      <button className="relative mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 transition duration-300 hover:scale-105 sm:mr-0 sm:h-8 sm:w-8">
        <ShoppingCart color="#3B0764" strokeWidth={2} size={16} />
        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-purple-700 text-xs text-white sm:-right-1 sm:-top-1">
          10
        </span>
      </button>

      {isLogged ? (
        <>
          <LoginGreet onSetToggle={handleToggle} />
          {toggleLogin && (
            <LoginLogoutBox>
              <span className="mb-2 inline-block break-all">
                john.doe@nfctron.com
              </span>
              <LoginLogoutBtn place="box">Logout</LoginLogoutBtn>
            </LoginLogoutBox>
          )}
        </>
      ) : (
        <>
          <LoginLogoutBtn onClick={handleToggle} ref={btnRef}>
            Login
          </LoginLogoutBtn>

          {toggleLogin && (
            <LoginLogoutBox ref={boxRef}>
              <Form />
            </LoginLogoutBox>
          )}
        </>
      )}
    </>
  );
};
