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

type EventContextType = {
  event: EventData | null;
  tickets: TicketData | null;
  isLoading: boolean;
  isError: boolean;
};

const EvContext = createContext<EventContextType | undefined>(undefined);

function EventProvider({ children }: { children: ReactNode }) {
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(null);
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
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
          setIsError(true);
        } else {
          console.log("An unknown error occurred");
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <EvContext.Provider value={{ event, tickets, isLoading, isError }}>
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
