import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      cz: {
        translation: {
          log: {
            login: "Přihlásit",
            logout: "Odhlásit",
            error: "Oops. Došlo k chybě. Zkuste to znovu.",
          },
          eventDetails: {
            description: "{{eventDescription}}",
            more: "Zobrazit více",
            less: "Zobrazit méně",
            date: "{{eventDate}}",
          },
          addCart: {
            ticketName: "Základní vstupenka",
            ticketName2: "VIP vstupenka",
            ticketSeat: "místo",
            ticketRow: "řada",
            add: "Přidat do košíku",
          },
          removeCart: "Odebrat z košíku",
          footer: {
            checkoutBtn: {
              order: "Objednat",
              checkout: "Checkout",
            },
            total_one: "Celkem za {{count}} jízdenku",
            total_other: "Celkem za {{count}} jízdenky",
          },
          cartMenu: {
            row: "Řada",
            seat: "Místo",
            name: "Základní vstupenka",
            name2: "VIP vstupenka",
            price: "Cena",
            summary: "Celkem",
            clear: "Vyprázdnit košík",
            empty:
              "Váš košík je momentálně prázdný. <br /> Začněte <strong>nakupovat nyní!</strong>",
          },
          login: {
            password: "Heslo",
            guest: "Pokračujte jako host!",
            or: "alebo",
            forget: "Zapomněli jste své heslo ?",
            login: "Přihlásit",
          },
          checkout: {
            firstName: "Křestní jméno",
            lastName: "Příjmení",
            order: "Vaše objednávka",
            email:
              "Ujistěte se, že máte stabilní internetové připojení a vyplněný e-mail, který je povinný.",
            addFirst: "Nejprve přidejte vstupenku do košíku!",
            goShop: "Jděte nakupovat!",
          },
        },
      },
      en: {
        translation: {
          log: {
            login: "Login",
            logout: "Logout",
            error: "Oops. There was an error. Try again.",
          },
          eventDetails: {
            description:
              "NFCtron deployed its services at 417 events in 2023, we officially entered Slovakia and extended convenient card payments to selected events. 2024 will be a watershed year in the NFCtron story, with the introduction of a new mobile app for festival-goers, advanced analytics tools in the NFCtron Hub and new ticketing options through NFCtron Tickets. In collaboration with Mastercard, we will move the NFCtron Nebula and NFCtron Nautilus projects towards reality. Introducing new partnerships with Komerční banka and T-Mobile. We will distribute CZK 12,000,000 among festivals for projects that will improve the visitor experience at events.",
            more: "Show more",
            less: "Show less",
            date: "Sunday 1 June 2025 at 14:00",
          },
          addCart: {
            ticketName: "{{name}}",
            ticketName2: "{{name}}",
            ticketSeat: "seat",
            ticketRow: "row",
            add: "Add to cart",
          },
          removeCart: "Remove from cart",
          footer: {
            checkoutBtn: {
              order: "Order now",
              checkout: "Checkout",
            },
            total_one: "Total for {{count}} ticket",
            total_other: "Total for {{count}} tickets",
          },
          cartMenu: {
            row: "Row",
            seat: "Seat",
            name: "{{name}}",
            name2: "{{name}}",
            price: "Price",
            summary: "Summary",
            clear: "Clear cart",
            empty:
              "Your cart is currently empty. <br /> Start <strong>shopping now!</strong>",
          },
          login: {
            password: "Password",
            guest: "Continue as a guest!",
            or: "or",
            forget: "Forget your password ?",
            login: "Login",
          },
          checkout: {
            firstName: "First name",
            lastName: "Last name",
            order: "Your order",
            email:
              "Make sure you have a stable internet connection and a filled-in email, which is required.",
            addFirst: "Add ticket to cart first!",
            goShop: "Go shopping!",
          },
        },
      },
      fr: {
        translation: {
          log: {
            login: "Connexion",
            logout: "Déconnexion",
            error: "Oups. Il y a eu une erreur. Réessayez.",
          },
          eventDetails: {
            description:
              "En 2023, NFCtron a déployé ses services dans 417 événements, nous sommes officiellement entrés en Slovaquie et avons étendu les paiements pratiques par carte à certains événements. 2024 sera une année charnière dans l'histoire de NFCtron, avec l'introduction d'une nouvelle application mobile pour les festivaliers, d'outils d'analyse avancés dans le NFCtron Hub et de nouvelles options de billetterie grâce à NFCtron Tickets. En collaboration avec Mastercard, nous ferons avancer les projets NFCtron Nebula et NFCtron Nautilus vers la réalité. Présentation de nouveaux partenariats avec Komerční banka et T-Mobile. Nous distribuerons 12 000 000 CZK entre les festivals pour des projets qui amélioreront l'expérience des visiteurs lors des événements.",
            more: "Afficher plus",
            less: "Montrer moins",
            date: "Dimanche 1 juin 2025 à 14:00",
          },
          addCart: {
            ticketName: "Billet de base",
            ticketName2: "VIP de base",
            ticketSeat: "siège",
            ticketRow: "rangée",
            add: "Ajouter au panier",
          },
          removeCart: "Retirer du panier",
          footer: {
            checkoutBtn: {
              order: "Commande",
              checkout: "Checkout",
            },
            total_one: "Total pour {{count}} billet",
            total_other: "Total pour {{count}} billets",
          },
          cartMenu: {
            row: "Rangée",
            seat: "Siège",
            name: "Billet de base",
            name2: "VIP de base",
            price: "Prix",
            summary: "Résumé",
            clear: "Panier vide",
            empty:
              "Votre panier est actuellement vide. <br /> Commencez à <strong>acheter maintenant!</strong>",
          },
          login: {
            password: " Mot de passe",
            guest: "Continuez en tant qu'invité !",
            or: "ou",
            forget: "Vous avez oublié votre mot de passe ?",
            login: "Se connecter",
          },
          checkout: {
            firstName: "Prénom",
            lastName: "Nom de famille",
            order: "Votre commande",
            email:
              "Assurez-vous d'avoir une connexion Internet stable et un email renseigné, qui est obligatoire.",
            addFirst: "Ajoutez d'abord le billet au panier !",
            goShop: "Faites vos achats !",
          },
        },
      },
      de: {
        translation: {
          log: {
            login: "Anmelden",
            logout: "Abmelden",
            error:
              "Ops. Es ist ein Fehler aufgetreten. Versuchen Sie es noch einmal.",
          },
          eventDetails: {
            description:
              "NFCtron hat seine Dienste bei 417 Veranstaltungen im Jahr 2023 eingesetzt, wir sind offiziell in die Slowakei eingetreten und haben bequeme Kartenzahlungen auf ausgewählte Veranstaltungen ausgeweitet. 2024 wird ein Wendepunkt in der Geschichte von NFCtron sein, mit der Einführung einer neuen mobilen App für Festivalbesucher, fortschrittlichen Analysetools im NFCtron Hub und neuen Ticketing-Optionen durch NFCtron Tickets. In Zusammenarbeit mit Mastercard werden wir die Projekte NFCtron Nebula und NFCtron Nautilus in die Realität umsetzen. Wir stellen neue Partnerschaften mit der Komerční banka und T-Mobile vor. Wir werden 12.000.000 CZK unter den Festivals für Projekte verteilen, die das Besuchererlebnis bei Veranstaltungen verbessern werden.",
            more: "Mehr anzeigen",
            less: "Weniger anzeigen",
            date: "Sonntag, 1. Juni 2025 um 14:00 Uhr",
          },
          addCart: {
            ticketName: "Basis ticket",
            ticketName2: "VIP ticket",
            ticketSeat: "sitzplatz",
            ticketRow: "zeile",
            add: "Zum Warenkorb hinzufügen",
          },
          removeCart: "Aus dem Warenkorb entfernen",
          footer: {
            checkoutBtn: {
              order: "Jetzt bestellen",
              checkout: "Checkout",
            },
            total_one: "Gesamtbetrag für  {{count}} ticket",
            total_other: "Gesamtbetrag für  {{count}} tickets",
          },
          cartMenu: {
            row: "Reihe",
            seat: "Sitz",
            name: "Basis ticket",
            name2: "VIP ticket",
            price: "Preis",
            summary: "Zusammenfassung",
            clear: "Warenkorb leeren",
            empty:
              "Ihr Warenkorb ist derzeit leer. <br /> <strong>Starten Sie jetzt Ihren Einkauf!</strong>",
          },
          login: {
            password: "Passwort",
            guest: "Als Gast fortfahren!",
            or: "oder",
            forget: "Passwort vergessen ?",
            login: "Anmelden",
          },
          checkout: {
            firstName: "Vorname",
            lastName: "Nachname",
            order: "Ihre Bestellung",
            email:
              "Stellen Sie sicher, dass Sie eine stabile Internetverbindung und eine ausgefüllte E-Mail-Adresse haben, die obligatorisch ist.",
            addFirst: "Legen Sie zuerst ein Ticket in den Warenkorb!",
            goShop: "Zum Einkauf!",
          },
        },
      },
    },
  });

export default i18n;
