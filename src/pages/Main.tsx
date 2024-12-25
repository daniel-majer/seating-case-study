import { useEvent } from "@/contexts/EventContext";
import { useState } from "react";
import { formatDate } from "@/utils/helper";
import { Seat } from "@/ui/Seat";

export const Main = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  /*   const [hasCheckedOut, setHasCheckedOut] = useState(false);
   */ const { event, fullSeatsDetails } = useEvent();

  return (
    <main className="flex grow justify-center">
      {/* inner content */}
      <div className="flex max-w-screen-xl grow flex-col-reverse justify-center gap-3 p-2 sm:p-4 md:flex-row">
        {/* seating card */}
        <div className="flex grow flex-col justify-between gap-2 rounded-md bg-white p-3 shadow-sm">
          <div className="flex grow flex-col-reverse justify-center gap-2 rounded-md bg-white p-3 shadow-sm">
            {fullSeatsDetails?.map((seat, i) => (
              <div
                key={seat.id}
                className="flex items-center justify-center gap-1"
              >
                <span className="mr-2 inline-block text-xs sm:text-base">
                  {i + 1}
                </span>
                {seat.seats.map((place) => (
                  <Seat key={place.seatId} place={place} />
                ))}
              </div>
            ))}
          </div>

          <div className="grid h-20 place-content-center rounded-lg bg-zinc-200 md:h-28">
            <span className="text-4xl text-zinc-400">STAGE</span>
          </div>
        </div>

        {/* event info */}
        <aside className="flex max-w-full grow flex-col gap-2 rounded-md bg-white p-3 text-zinc-500 shadow-sm md:max-w-80">
          <img
            className="rounded-md"
            src={event?.headerImageUrl}
            alt={event?.namePub}
          />
          <h1 className="text-xl font-semibold text-zinc-900">
            {event?.namePub}
          </h1>
          <p>📅 {formatDate(event?.dateFrom)}</p>
          <p>📌 {event?.place}</p>
          <p className="text-sm">
            {isExpanded
              ? `${event?.description} `
              : `${event?.description.substring(0, 200)}... `}
            <span
              className="cursor-pointer whitespace-nowrap text-purple-500 underline"
              onClick={() => setIsExpanded((toggle) => !toggle)}
            >
              {isExpanded ? "Zobraziť menej" : "Zobraziť viac"}
            </span>
          </p>
          {/* add to calendar button */}
          {/*         <Button variant="secondary" disabled>
            Add to calendar
          </Button> */}
        </aside>
      </div>
    </main>
  );
};
