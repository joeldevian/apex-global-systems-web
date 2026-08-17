import { ServiceInterest } from "@apex/shared-types";

export interface ContactEntity {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_interest: ServiceInterest;
  message: string;
  created_at: string;
}
