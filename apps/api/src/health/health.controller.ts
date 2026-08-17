import { Controller, Get } from "@nestjs/common";
import { SupabaseService } from "../supabase/supabase.service";

@Controller("api/health")
export class HealthController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  check() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      supabaseConfigured: this.supabaseService.isConfigured(),
    };
  }
}
