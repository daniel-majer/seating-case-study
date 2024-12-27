import { useEvent } from "@/contexts/EventContext";
import { Seat } from "./Seat";

export const EventCard = () => {
      const {  fullSeatsDetails } = useEvent();
    
  return (
    <div className="flex grow flex-col justify-between gap-2 rounded-md bg-white p-3 shadow-sm transition duration-500 dark:bg-slate-800">
      <div className="flex grow flex-col-reverse justify-center gap-2 rounded-md bg-white p-3 shadow-sm transition duration-500 dark:bg-slate-800">
        {fullSeatsDetails?.map((seat, i) => (
          <div key={seat.id} className="flex items-center justify-center gap-1">
            <span className="mr-2 inline-block text-xs transition duration-500 dark:text-white sm:text-base">
              {i + 1}
            </span>
            {seat.seats.map((place) => (
              <Seat key={place.seatId} place={place} />
            ))}
          </div>
        ))}
      </div>

      <div className="grid h-20 place-content-center rounded-lg bg-zinc-200 transition duration-500 dark:bg-slate-600 md:h-28">
        <span className="text-4xl text-zinc-400 transition duration-500 dark:text-slate-200">
          STAGE
        </span>
      </div>
    </div>
  );
};
