-- Apex Global Systems — tabla de leads del formulario de contacto
-- Ejecutar manualmente en el SQL Editor de Supabase (Project → SQL Editor → New query).

create table if not exists public.contacts (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  email              text not null,
  phone              text,
  company            text,
  service_interest   text not null check (service_interest in (
                        'desarrollo-web', 'software-a-medida', 'erp', 'crm',
                        'automatizacion-procesos', 'inteligencia-datos', 'agentes-ia', 'no-seguro'
                     )),
  message            text not null,
  created_at         timestamptz not null default now()
);

-- RLS: la tabla solo se escribe/lee desde el backend con la service_role key,
-- así que se bloquea el acceso público por defecto.
alter table public.contacts enable row level security;
