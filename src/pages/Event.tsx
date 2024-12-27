import { EventCard } from "@/ui/EventCard";
import { EventDescription } from "@/ui/EventDescription";

export const Event = () => {
  return (
    <main className="flex grow justify-center transition duration-500 dark:bg-slate-900">
      {/* inner content */}
      <div className="flex max-w-screen-xl grow flex-col-reverse justify-center gap-3 p-2 transition duration-500 dark:bg-slate-900 sm:p-4 md:flex-row">
        {/* seating card */}
        <EventCard />

        {/* event info */}
        <EventDescription />
      </div>
    </main>
  );
};
