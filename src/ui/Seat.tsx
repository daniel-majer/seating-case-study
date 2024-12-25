import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover.tsx";
import React from "react";
import { ButtonPop } from "./ButtonPop";
import { useEvent } from "@/contexts/EventContext";
import { useCart } from "@/contexts/CartContext";
import { Item } from "../contexts/EventContext";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {
  place: Item;
}

export const Seat = ({ place }: SeatProps) => {
  const { event, tickets: t } = useEvent();
  const { addItem, deleteItem, tickets } = useCart();

  const isInCart = tickets.some((seat) => seat.seatId === place.seatId);
  const isOccupied = place.ticketTypeId === "Occupied";

  function addToCart() {
    const newTicket = {
      eventId: event?.eventId,
      seatId: place.seatId,
      ticketTypeId: place.ticketTypeId,
      price: place.price,
      row: place.row,
      seat: place.place,
      currency: event?.currencyIso,
      typeName: place.ticketName,
    };

    console.log(newTicket, t);

    if (isInCart) return;
    addItem(newTicket);
  }

  function deleteFromCart() {
    deleteItem(place.seatId ? place.seatId : "");
  }

  return (
    <Popover>
      <PopoverTrigger
        className={`transition-color flex aspect-square max-w-10 flex-1 items-center justify-center rounded-full ${isOccupied ? "cursor-not-allowed bg-red-400 text-slate-200 hover:bg-red-400" : ""} ${isInCart ? "bg-purple-500 text-slate-100" : ""} ${!isOccupied && !isInCart ? "cursor-pointer bg-zinc-200 text-zinc-400 hover:bg-zinc-300" : ""}`}
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
        <>
          <p>
            <strong>{place.ticketName}</strong>
          </p>
          <p>
            {place.row}. row | {place.place} seat
          </p>
          <span>
            {place.price} {event?.currencyIso}
          </span>
        </>

        <footer className="flex flex-col">
          {isInCart ? (
            <ButtonPop
              onClick={() => deleteFromCart()}
              variant="destructive"
              size="sm"
            >
              Remove from cart
            </ButtonPop>
          ) : (
            <ButtonPop
              onClick={() => addToCart()}
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
};
