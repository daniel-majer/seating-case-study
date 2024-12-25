import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { useEvent } from "@/contexts/EventContext";
import { Loader } from "./Loader";
import { Error } from "@/pages/Error";

const AppLayout = () => {
  const { isLoading, isError } = useEvent();

  return (
    <div className="flex h-screen flex-col justify-between text-zinc-900">
      <Header />
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && <Outlet />}
      <Footer />
    </div>
  );
};

export default AppLayout;
