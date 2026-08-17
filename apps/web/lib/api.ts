import type { ContactPayload } from "@apex/shared-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export class ApiError extends Error {}

export async function submitContact(payload: ContactPayload): Promise<void> {
  let res: Response;

  try {
    res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError(
      "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.",
    );
  }

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const message =
      (Array.isArray(data?.message) ? data.message[0] : data?.message) ??
      "Ocurrió un error al enviar tu mensaje. Intenta nuevamente.";
    throw new ApiError(message);
  }
}
