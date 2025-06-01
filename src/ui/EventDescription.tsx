import { useState } from "react";
import { ButtonPop } from "@/ui/ButtonPop";
import { addToCalendar, formatDate } from "@/utils/helper";
import { useEvent } from "@/contexts/EventContext";
import { useTranslation } from "react-i18next";

export const EventDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { event } = useEvent();
  const { t } = useTranslation();

  const handleCalendar = () => {
    addToCalendar(event!);
  };

  return (
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
      </p>
      <p>📌 {event?.place}</p>
      <p className="text-sm">
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
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white transition duration-500 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500"
        onClick={handleCalendar}
      >
        {t("eventDetails.calendar")}
      </ButtonPop>
    </aside>
  );
};
