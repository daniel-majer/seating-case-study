const URL = "https://nfctron-frontend-seating-case-study-2024.vercel.app";

type Tickets = {
  ticketTypeId?: string | false;
  seatId?: string;
};

type User = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export async function apiOrder(order: {
  eventId?: string;
  tickets?: Tickets[];
  user?: User;
}) {
  const response = await fetch(`${URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!response.ok) throw new Error("Order failed try it again, please.");
  const data = await response.json();
  return data;
}
