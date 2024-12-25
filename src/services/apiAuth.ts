const URL = "https://nfctron-frontend-seating-case-study-2024.vercel.app/login";

export async function apiAuth(credentials: {
  email: string;
  password: string;
}) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("Login failed");
  const data = await response.json();
  return data;
}
