import { Injectable, Logger } from "@nestjs/common";
import { ContactPayload } from "@apex/shared-types";

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  async notifyNewLead(payload: ContactPayload): Promise<void> {
    // Fase de desarrollo: se registra en consola. En producción, reemplazar
    // por un proveedor real (Nodemailer + cuenta transaccional, Resend, etc.)
    this.logger.log(
      `Nuevo lead recibido: ${payload.name} <${payload.email}> — interés: ${payload.serviceInterest}`,
    );
  }
}
