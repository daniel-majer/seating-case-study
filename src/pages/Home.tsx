import { useEvent } from "@/contexts/EventContext";
import { useState } from "react";
import { convertISOToICalendarFormat, formatDate } from "@/utils/helper";
import { Seat } from "@/ui/Seat";
import { useTranslation } from "react-i18next";
import { ButtonPop } from "@/ui/ButtonPop";

export const Main = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { event, fullSeatsDetails } = useEvent();
  const { t } = useTranslation();

  const handleAddEvent = () => {
    const baseUrl = "https://www.google.com/calendar/render";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `${event?.namePub}`,
      dates: `${convertISOToICalendarFormat(event?.dateFrom)}/${convertISOToICalendarFormat(event?.dateTo)}`,
      details: `${event?.description}`,
      location: `${event?.place}`,
    });

    window.open(`${baseUrl}?${params.toString()}`, "_blank");
  };

  return (
    <main className="flex grow justify-center">
      {/* inner content */}
      <div className="flex max-w-screen-xl grow flex-col-reverse justify-center gap-3 p-2 transition duration-500 dark:bg-slate-900 sm:p-4 md:flex-row">
        {/* seating card */}
        <div className="flex grow flex-col justify-between gap-2 rounded-md bg-white p-3 shadow-sm transition duration-500 dark:bg-slate-800">
          <div className="flex grow flex-col-reverse justify-center gap-2 rounded-md bg-white p-3 shadow-sm transition duration-500 dark:bg-slate-800">
            {fullSeatsDetails?.map((seat, i) => (
              <div
                key={seat.id}
                className="flex items-center justify-center gap-1"
              >
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

        {/* event info */}
        <aside className="flex max-w-full grow flex-col gap-2 rounded-md bg-white p-3 text-zinc-500 shadow-sm transition duration-500 dark:bg-slate-800 dark:text-white md:max-w-80">
          <img
            className="rounded-md"
            src={event?.headerImageUrl}
            alt={event?.namePub}
          />
          <h1 className="text-xl font-semibold text-zinc-900 transition duration-500 dark:text-white">
            {event?.namePub}
          </h1>
          <p>
            {`📅
            ${t("eventDetails.date", {
              eventDate: formatDate(event?.dateFrom),
            })}`}
            {/*             {formatDate(event?.dateFrom)}
             */}
          </p>
          <p>📌 {event?.place}</p>
          <p className="text-sm">
            {/*  {t("eventDetails.description", {
              eventDescription: event?.description,
            })} */}
            {isExpanded
              ? `${t("eventDetails.description", {
                  eventDescription: event?.description,
                })} `
              : `${t("eventDetails.description", {
                  eventDescription: event?.description,
                }).substring(0, 200)}... `}

            <span
              className="cursor-pointer whitespace-nowrap text-purple-500 underline"
              onClick={() => setIsExpanded((toggle) => !toggle)}
            >
              {isExpanded ? t("eventDetails.less") : t("eventDetails.more")}
            </span>
          </p>
          {/* add to calendar button */}
          <ButtonPop
            variant="secondary"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500"
            onClick={handleAddEvent}
          >
            Add to calendar
          </ButtonPop>
        </aside>
      </div>
    </main>
  );
};
