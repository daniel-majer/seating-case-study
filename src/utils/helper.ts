export const BASE_URL =
  "https://nfctron-frontend-seating-case-study-2024.vercel.app";

export function formatDate(iso: string | undefined) {
  if (iso === undefined) return;

  const date = new Date(iso);

  const formattedDateTime = date.toLocaleString("sk-SK", {
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
