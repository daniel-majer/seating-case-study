import { useEffect, useState } from "react";

type UseDarkThemeReturn = [boolean, () => void];

const getInitialTheme = () => {
  const getSystemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const getStoredTheme = localStorage.getItem("darkTheme") === "true";
  if (localStorage.getItem("darkTheme") === "false") return false;

  return getStoredTheme || getSystemTheme;
};

const useDarkTheme = (): UseDarkThemeReturn => {
  // const [isDarkTheme, setIsDarkTheme] = useState(() => getInitialTheme());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    if (isDarkTheme === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return [isDarkTheme, handleTheme];
};

export default useDarkTheme;
