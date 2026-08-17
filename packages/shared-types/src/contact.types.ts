export const SERVICE_INTEREST_VALUES = [
  "desarrollo-web",
  "software-a-medida",
  "erp",
  "crm",
  "automatizacion-procesos",
  "inteligencia-datos",
  "agentes-ia",
  "no-seguro",
] as const;

export type ServiceInterest = (typeof SERVICE_INTEREST_VALUES)[number];

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: ServiceInterest;
  message: string;
}

export interface ContactSuccessResponse {
  success: true;
}

export interface ContactErrorResponse {
  success: false;
  message: string;
}

export type ContactResponse = ContactSuccessResponse | ContactErrorResponse;
