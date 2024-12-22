import { Trash2 } from "lucide-react";
import { Button } from "./Button";

const cart = [
  {
    id: "12b7b37f-6ee2-4513-ac40-b5fdsffds",
    name: "Regular ticket",
    price: 1000,
    seatRow: 3,
    place: 12,
  },
  {
    id: "12b7b37f-6ee2-4513-ac40-b55efdsfds19b",
    name: "VIP ticket",
    price: 2000,
    seatRow: 1,
    place: 1,
  },
  {
    id: "12b7b37f-6ee2-4513-ac40-b55ebgfdghfd9b",
    name: "Regular ticket",
    price: 1000,
    seatRow: 3,
    place: 7,
  },
  {
    id: "12b7b37f-6ee2-4513-ac40-b5fsdfaa19b",
    name: "VIP ticket",
    price: 2000,
    seatRow: 8,
    place: 3,
  },
];

export const CartMenu = () => {
  if (!cart.length)
    return (
      <p className="py-4 text-center">
        Your cart is currently empty. <br /> Start{" "}
        <strong>shopping now!</strong>
      </p>
    );

  return (
    <>
      <ul className="mb-5 divide-y divide-purple-500">
        {cart.map((ticket) => {
          return (
            <li
              key={ticket.id}
              className="flex items-center justify-between py-1"
            >
              <strong className="w-28">{ticket.name}</strong>
              <span className="px-2">
                Seat row: <strong>{ticket.seatRow}</strong>
              </span>
              <span className="px-2">
                Price: <strong>{ticket.price} CZK</strong>
              </span>
              <Trash2 className="w-6" color="red" size={16} strokeWidth={2} />
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between">
        <Button>Clear cart</Button>
        <span className="">
          Spolu: <strong>10 000 CZK</strong>
        </span>
      </div>
    </>
  );
};
