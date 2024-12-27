import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { useEvent } from "@/contexts/EventContext";

export const Header = () => {
  const { event } = useEvent();

  return (
    <header className="sticky left-0 right-0 top-0 flex justify-center border-b border-zinc-200 bg-white transition-all duration-500 dark:border-slate-500 dark:bg-slate-600">
      <nav className="flex max-w-screen-xl grow items-center justify-between gap-3 p-2 py-3 sm:p-4">
        {/* image/logo placeholder */}
        <div className="leading-4">
          <Logo />
        </div>

        {/* title placeholder */}
        <div className="hidden flex-none basis-auto text-center lg:block">
          <h1 className="text-3xl text-purple-950 transition-all duration-500 dark:text-white lg:text-4xl">
            {event?.namePub}
          </h1>
        </div>

        {/* menu placeholder */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <Menu />
        </div>
      </nav>
    </header>
  );
};
