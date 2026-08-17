import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { ServiceInterest, SERVICE_INTEREST_VALUES } from "@apex/shared-types";

export class CreateContactDto {
  @IsString()
  @MinLength(2, { message: "El nombre debe tener al menos 2 caracteres" })
  name!: string;

  @IsEmail({}, { message: "Ingresa un correo electrónico válido" })
  email!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsIn(SERVICE_INTEREST_VALUES, {
    message: `serviceInterest debe ser uno de: ${SERVICE_INTEREST_VALUES.join(", ")}`,
  })
  serviceInterest!: ServiceInterest;

  @IsString()
  @MinLength(10, { message: "El mensaje debe tener al menos 10 caracteres" })
  message!: string;
}
