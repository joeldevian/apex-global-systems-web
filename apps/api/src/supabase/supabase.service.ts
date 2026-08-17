import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private client: SupabaseClient | null = null;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>("supabase.url");
    const serviceRoleKey = this.configService.get<string>(
      "supabase.serviceRoleKey",
    );

    if (url && serviceRoleKey) {
      this.client = createClient(url, serviceRoleKey, {
        auth: { persistSession: false },
      });
    } else {
      this.logger.warn(
        "Supabase no está configurado (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY vacíos). " +
          "El resto del sitio funciona igual; los endpoints que dependen de la base de datos responderán 503.",
      );
    }
  }

  isConfigured(): boolean {
    return this.client !== null;
  }

  getClient(): SupabaseClient {
    if (!this.client) {
      throw new Error("Supabase client solicitado sin estar configurado");
    }
    return this.client;
  }
}
