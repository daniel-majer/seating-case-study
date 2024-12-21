import { Outlet } from "react-router";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
