import { useUser } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useEvent } from "@/contexts/EventContext";
import { ButtonPop } from "@/ui/ButtonPop";
import { Input } from "@/ui/Input";
import { useEffect, useState } from "react";
import { apiOrder } from "@/services/apiOrder";
import { Link } from "react-router";
import { Loader } from "@/ui/Loader";
import { useTranslation } from "react-i18next";

export const Checkout = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [firstName, setFirstName] = useState<string | undefined>("");
  const [lastName, setLastName] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, tickets, clearCart } = useCart();
  const { isAuthenticated, user } = useUser();
  const { event } = useEvent();
  const { t } = useTranslation();

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
        console.log(newOrder);

        setIsLoading(true);
        setIsError(false);
        setSuccessMessage("");
        const data = await apiOrder(newOrder);
        setSuccessMessage(data.message);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(
    function () {
      if (successMessage) clearCart();
    },
    [successMessage, clearCart],
  );

  if (!tickets.length) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="flex flex-col justify-center text-lg sm:text-4xl">
          <p>{t("checkout.addFirst")}</p>
          <Link className="text-center font-bold hover:underline" to="/">
            {t("checkout.goShop")}
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) return <Loader />;

  if (successMessage) {
    return (
      <p className="grid flex-1 place-items-center text-lg transition duration-500 dark:text-white sm:text-4xl">
        {successMessage}
      </p>
    );
  }

  return (
    <main className="flex w-full max-w-screen-xl grow flex-col self-center p-2 text-slate-900 transition duration-500 dark:bg-slate-800 dark:text-white sm:p-4">
      <div className="flex w-full flex-col self-center border-b border-slate-400 pb-8 sm:flex-col sm:pb-10">
        <h2 className="mb-8 text-5xl sm:mb-12 sm:text-7xl">Checkout</h2>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:pb-6">
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
        </div>
        {isError && (
          <p className="text-lg text-red-500">{t("checkout.email")}</p>
        )}
      </div>

      <div className="mb-10 w-full flex-1 self-center pt-6 sm:mb-14 sm:pt-8">
        <h3 className="mb-2 text-3xl sm:mb-6">{t("checkout.order")}</h3>

        <ul className="mb-2 text-xs sm:mb-5 sm:text-base">
          {tickets.map((ticket) => {
            return (
              <li
                key={ticket.seatId}
                className="flex items-center justify-between py-1"
              >
                <strong className="flex-1 sm:w-28">
                  {ticket.typeName === "VIP ticket"
                    ? t("cartMenu.name2", { name: ticket.typeName })
                    : t("cartMenu.name", { name: ticket.typeName })}
                </strong>
                <span className="flex-1 px-2">
                  {t("cartMenu.row")}: <strong>{ticket.row}</strong> |{" "}
                  {t("cartMenu.seat")}:<strong>{ticket.seat}</strong>
                </span>
                <span className="px-2">
                  {t("cartMenu.price")}:
                  <strong className="flex-1">
                    {` ${ticket.price} ${ticket.currency}`}
                  </strong>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bottom-0 left-0 right-0 flex w-full justify-between self-center rounded-xl bg-white transition duration-500 ease-in-out dark:bg-slate-500 dark:text-white">
        {/* inner content */}
        <div className="flex grow items-center justify-between gap-4 p-6">
          {/* total in cart state */}
          <div className="f flex flex-col text-base sm:text-2xl">
            <span>
              {t("footer.total", {
                count: tickets.length,
              })}
            </span>
            <span className="font-semibold">{totalPrice} CZK</span>
          </div>

          {/* checkout button */}
          <ButtonPop
            className="bg-gradient-to-r from-blue-500 to-purple-500 transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-blue-500 dark:text-white"
            variant="default"
            onClick={sendOrder}
          >
            {t("footer.checkoutBtn.order")}
          </ButtonPop>
        </div>
      </div>
    </main>
  );
};
