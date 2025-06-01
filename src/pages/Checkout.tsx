import { useUser } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useEvent } from "@/contexts/EventContext";
import { useEffect, useState } from "react";
import { apiOrder } from "@/services/apiOrder";
import { Link } from "react-router";
import { Loader } from "@/ui/Loader";
import { useTranslation } from "react-i18next";
import { CheckoutForm } from "@/ui/CheckoutForm";
import { Input } from "@/ui/Input";
import { CheckoutDetails } from "@/ui/CheckoutDetails";
import { CheckoutFooter } from "@/ui/CheckoutFooter";

export const Checkout = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [firstName, setFirstName] = useState<string | undefined>("");
  const [lastName, setLastName] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { tickets, clearCart, setIsCheckout } = useCart();
  const { isAuthenticated, user } = useUser();
  const { event } = useEvent();
  const { t } = useTranslation();

  useEffect(() => {
    setIsCheckout();
  }, [setIsCheckout]);

  useEffect(
    function () {
      if (isAuthenticated) {
        setEmail(user?.email);
        setFirstName(user?.firstName);
        setLastName(user?.lastName);
      }
    },
    [isAuthenticated, user],
  );

  async function sendOrder() {
    if (tickets.length) {
      const newOrder = {
        eventId: event?.eventId,
        tickets: tickets.map((ticket) => {
          return { ticketTypeId: ticket.ticketTypeId, seatId: ticket.seatId };
        }),
        user: {
          email: email,
          firstName: firstName,
          lastName: lastName,
        },
      };
      try {
        setIsLoading(true);
        setIsError(false);
        setSuccessMessage("");
        const data = await apiOrder(newOrder);
        setSuccessMessage(data.message);
        setIsCheckout();
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(
    function () {
      if (successMessage) {
        clearCart();
      }
    },
    [successMessage, clearCart],
  );

  if (successMessage) {
    return (
      <p className="grid flex-1 place-items-center text-center text-2xl transition duration-500 dark:text-white sm:text-4xl">
        {successMessage}
      </p>
    );
  }

  if (!tickets.length) {
    return (
      <div className="grid flex-1 place-items-center transition duration-500 dark:text-white">
        <div className="flex flex-col justify-center text-lg sm:text-4xl">
          <p>{t("checkout.addFirst")}</p>
          <Link className="text-center font-bold hover:underline" to="/">
            {t("checkout.goShop")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex w-full max-w-screen-xl grow flex-col self-center p-2 text-slate-900 transition duration-500 dark:bg-slate-800 sm:p-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CheckoutForm isError={isError}>
            <Input
              type="email"
              label="email"
              placeholder="Email"
              onSet={setEmail}
              value={email}
            />
            <Input
              type="text"
              label="first"
              placeholder={t("checkout.firstName")}
              onSet={setFirstName}
              value={firstName}
            />
            <Input
              type="text"
              label="last"
              placeholder={t("checkout.lastName")}
              onSet={setLastName}
              value={lastName}
            />
          </CheckoutForm>

          <CheckoutDetails />
        </>
      )}

      <CheckoutFooter sendOrder={sendOrder} isLoading={isLoading} />
    </main>
  );
};
