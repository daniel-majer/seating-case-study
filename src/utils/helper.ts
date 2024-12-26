export const BASE_URL =
  "https://nfctron-frontend-seating-case-study-2024.vercel.app";

export function formatDate(iso: string | undefined) {
  if (iso === undefined) return;

  const date = new Date(iso);

  const formattedDateTime = date.toLocaleString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const formatted =
    formattedDateTime.charAt(0).toUpperCase() + formattedDateTime.slice(1);

  return formatted;
}

export function convertISOToICalendarFormat(iso: string | undefined) {
  if (iso === undefined) return;

  const date = new Date(iso);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}
