import { serviceInterestOptions } from "@/content/services";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
}

export class ApiError extends Error {}

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export async function submitContact(payload: ContactPayload): Promise<void> {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new ApiError(
      "El formulario no está configurado todavía. Escríbenos directo a contacto@apexglobalsystems.pe.",
    );
  }

  const serviceLabel =
    serviceInterestOptions.find((opt) => opt.value === payload.serviceInterest)?.label ??
    payload.serviceInterest;

  let res: Response;
  try {
    res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nuevo contacto desde la web — ${payload.name}`,
        from_name: payload.name,
        name: payload.name,
        email: payload.email,
        phone: payload.phone || "No indicado",
        company: payload.company || "No indicado",
        "Servicio de interés": serviceLabel,
        message: payload.message,
      }),
    });
  } catch {
    throw new ApiError(
      "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.",
    );
  }

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    throw new ApiError(
      data?.message ?? "Ocurrió un error al enviar tu mensaje. Intenta nuevamente.",
    );
  }
}
