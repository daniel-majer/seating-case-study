import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { useEvent } from "@/contexts/EventContext";
import { Loader } from "./Loader";
import { ErrorEvent } from "./ErrorEvent";

const AppLayout = () => {
  const { isLoading, isError } = useEvent();

  return (
    <div className="flex h-screen flex-col justify-between text-zinc-900 transition duration-500 dark:bg-slate-800">
      <Header />
      {isLoading && <Loader />}
      {isError && <ErrorEvent />}
      {!isLoading && !isError && <Outlet />}
      <Footer />
    </div>
  );
};

export default AppLayout;
