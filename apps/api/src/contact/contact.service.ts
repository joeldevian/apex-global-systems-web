import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import { SupabaseService } from "../supabase/supabase.service";
import { MailService } from "../mail/mail.service";
import { CreateContactDto } from "./dto/create-contact.dto";

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly mailService: MailService,
  ) {}

  async create(dto: CreateContactDto): Promise<void> {
    if (!this.supabaseService.isConfigured()) {
      throw new ServiceUnavailableException(
        "Base de datos no configurada. El formulario estará disponible en cuanto se conecte Supabase.",
      );
    }

    const { error } = await this.supabaseService
      .getClient()
      .from("contacts")
      .insert({
        name: dto.name,
        email: dto.email,
        phone: dto.phone ?? null,
        company: dto.company ?? null,
        service_interest: dto.serviceInterest,
        message: dto.message,
      });

    if (error) {
      this.logger.error(`Error al insertar lead en Supabase: ${error.message}`);
      throw new ServiceUnavailableException(
        "No se pudo guardar tu mensaje. Intenta nuevamente en unos minutos.",
      );
    }

    await this.mailService.notifyNewLead(dto);
  }
}
