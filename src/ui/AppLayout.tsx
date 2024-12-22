import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
