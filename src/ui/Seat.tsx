import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover.tsx";
import React from "react";
import { ButtonPop } from "./ButtonPop";
import { useEvent } from "@/contexts/EventContext";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {
  place: {
    place: number;
    row?: number;
    seatId: string;
    ticketTypeId:
      | { id: string; name: string; price: number }
      | string
      | undefined;
  };
}

export const Seat = React.forwardRef<HTMLDivElement, SeatProps>(({ place }) => {
  const { event } = useEvent();
  const isInCart = false;
  const isOccupied = place.ticketTypeId === "Occupied";

  return (
    <Popover>
      <PopoverTrigger
        className={`transition-color flex aspect-square max-w-10 flex-1 cursor-pointer items-center justify-center rounded-full bg-zinc-200 text-zinc-400 hover:bg-zinc-300 ${place.ticketTypeId === "Occupied" ? "cursor-not-allowed bg-red-400 text-slate-200 hover:bg-red-400" : ""}`}
        onClick={(e) => {
          if (isOccupied) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <span className="text-xs font-medium">{place.place}</span>
      </PopoverTrigger>
      <PopoverContent>
        {typeof place.ticketTypeId === "object" &&
        place.ticketTypeId !== null ? (
          <>
            <p>
              <strong>{place.ticketTypeId.name}</strong>
            </p>
            <p>
              {place.row}. row | {place.place} seat
            </p>
            <span>
              {place.ticketTypeId.price} {event?.currencyIso}
            </span>
          </>
        ) : (
          ""
        )}

        <footer className="flex flex-col">
          {isInCart ? (
            <ButtonPop variant="destructive" size="sm">
              Remove from cart
            </ButtonPop>
          ) : (
            <ButtonPop
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-gray-300"
            >
              Add to cart
            </ButtonPop>
          )}
        </footer>
      </PopoverContent>
    </Popover>
  );
});
