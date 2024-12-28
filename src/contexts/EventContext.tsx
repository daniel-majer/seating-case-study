import { BASE_URL } from "@/utils/helper";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type EventData = {
  eventId: string;
  namePub: string;
  description: string;
  currencyIso: string;
  dateFrom: string;
  dateTo: string;
  headerImageUrl: string;
  place: string;
};

type TicketData = {
  ticketTypes: {
    id: string;
    name: string;
    price: number;
  }[];
  seatRows: {
    seatRow: number;
    seats: {
      seatId: string;
      place: number;
      ticketTypeId: string;
    }[];
  }[];
};

type OccupiedSeats = {
  seatId?: string;
  place?: number;
  ticketTypeId?: string;
};

export type Item = OccupiedSeats & {
  row?: number;
  price?: number;
  ticketName?: string;
};

type FullSeats = {
  id: string;
  seats: (Item | OccupiedSeats)[];
}[];

type EventContextType = {
  event: EventData | null;
  tickets: TicketData | null;
  fullSeatsDetails?: FullSeats | null;
  isLoading: boolean;
  isError: boolean;
};

const EvContext = createContext<EventContextType | undefined>(undefined);

function EventProvider({ children }: { children: ReactNode }) {
  const [event, setEvent] = useState<EventData | null>(null);
  const [tickets, setTickets] = useState<TicketData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(`${BASE_URL}/event`);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();

        const res2 = await fetch(
          `${BASE_URL}/event-tickets?eventId=${data.eventId}`,
        );
        if (!res2.ok) throw new Error("Something went wrong");
        const data2 = await res2.json();

        setEvent(data);
        setTickets(data2);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const totalColumns = tickets?.seatRows?.reduce((acc, curr) => {
    const maxPlace = curr?.seats?.reduce(
      (seatAcc, seatCurr) => Math.max(seatAcc, seatCurr.place || 0),
      0,
    );
    return Math.max(acc, maxPlace || 0);
  }, 0);

  const fullSeatsDetails = tickets?.seatRows.map((row) => {
    const createSeats = Array.from(
      { length: totalColumns || 0 },
      (_, i) => i + 1,
    );

    const seats = createSeats.map((seat) => {
      const existingSeat = row.seats.find((s) => s.place === seat);

      if (existingSeat) {
        const findTypeId = tickets?.ticketTypes.find(
          (t) => t.id === existingSeat.ticketTypeId,
        );

        return {
          ...existingSeat,
          row: row.seatRow,
          price: findTypeId?.price,
          ticketTypeId: findTypeId?.id,
          ticketName: findTypeId?.name,
        };
      } else {
        return {
          seatId: crypto.randomUUID(),
          place: seat,
          ticketTypeId: "Occupied",
        };
      }
    });

    return {
      id: crypto.randomUUID(),
      seats,
    };
  });

  return (
    <EvContext.Provider
      value={{ event, tickets, isLoading, isError, fullSeatsDetails }}
    >
      {children}
    </EvContext.Provider>
  );
}

function useEvent() {
  const context = useContext(EvContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { useEvent, EventProvider };
