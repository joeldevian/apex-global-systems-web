export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
}

export class ApiError extends Error {}

/**
 * Cascarón temporal: simula un envío exitoso sin backend real.
 * TODO: conectar a un servicio de email (Resend, Web3Forms, EmailJS, etc.)
 * cuando se defina el proveedor.
 */
export async function submitContact(payload: ContactPayload): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 600));
}
