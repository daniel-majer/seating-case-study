import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover.tsx";
import React from "react";
import { ButtonPop } from "./ButtonPop";
import { useEvent } from "@/contexts/EventContext";
import { useCart } from "@/contexts/CartContext";
import { Item } from "../contexts/EventContext";
import { useTranslation } from "react-i18next";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {
  place: Item;
}

export const Seat = ({ place }: SeatProps) => {
  const { event } = useEvent();
  const { addItem, deleteItem, tickets } = useCart();
  const { t } = useTranslation();

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
        className={`flex aspect-square max-w-10 flex-1 items-center justify-center rounded-full transition duration-500 ${isOccupied ? "cursor-not-allowed bg-red-400 text-slate-200 hover:bg-red-400 dark:bg-red-500 dark:text-white" : ""} ${isInCart ? "bg-purple-500 text-slate-100 dark:text-white" : ""} ${!isOccupied && !isInCart ? "cursor-pointer bg-zinc-200 text-zinc-400 hover:bg-zinc-300 dark:bg-white dark:text-slate-800 dark:hover:bg-purple-500 dark:hover:text-white" : ""}`}
        onClick={(e) => {
          if (isOccupied) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <span className="text-xs font-medium">{place.place}</span>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-slate-300 dark:text-black">
        <>
          <p>
            <strong>
              {place.ticketName === "VIP ticket"
                ? t("addCart.ticketName2", { name: place.ticketName })
                : t("addCart.ticketName", { name: place.ticketName })}
            </strong>
          </p>
          <p>
            {place.row}. {t("addCart.ticketRow")} | {place.place}{" "}
            {t("addCart.ticketSeat")}
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
              className="bg-red-400 dark:bg-red-500"
            >
              {t("removeCart")}
            </ButtonPop>
          ) : (
            <ButtonPop
              onClick={() => addToCart()}
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-gray-300"
            >
              {t("addCart.add")}
            </ButtonPop>
          )}
        </footer>
      </PopoverContent>
    </Popover>
  );
};
