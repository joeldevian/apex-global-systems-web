# Apex Global Systems — Sitio Web

Monorepo del sitio institucional de Apex Global Systems. Frontend en Next.js, backend en NestJS, base de datos en Supabase (Postgres gestionado).

> Referencia de layout/estructura usada durante el desarrollo: [teamq.biz](https://teamq.biz) (solo estructura y animaciones — colores y tipografía son de Apex Global Systems, ver `apex-global-systems-website-plan.md`).
>
> **Nota:** el sitio es multi-página (no de una sola página larga) y no usa Docker — ambas decisiones se tomaron durante el desarrollo, a pedido del cliente, y difieren de lo que describen las secciones 2, 3 y 8 del `apex-global-systems-website-plan.md` original.

## Estructura

```
apps/
  web/     Next.js 14 (App Router) + Tailwind + Framer Motion
    app/
      page.tsx              Inicio (resumen/teaser de cada sección)
      quienes-somos/         Historia, misión y visión completas
      servicios/              Las 3 líneas de servicio en detalle
      casos-de-exito/         Grid completo de casos + modal
      equipo/                  Grid completo del equipo
      contacto/                Formulario + datos + mapa
  api/     NestJS — endpoint de contacto + healthcheck
packages/
  shared-types/   Tipos TS compartidos entre web y api
sql/       Scripts SQL para ejecutar manualmente en Supabase
```

## Requisitos

- Node.js ≥ 20
- pnpm ≥ 9 (`corepack enable && corepack prepare pnpm@latest --activate`)

## Desarrollo local

```bash
pnpm install
cp .env.example .env
pnpm dev
```

- Web: http://localhost:3000
- API: http://localhost:4000/api/health

El sitio funciona completo sin credenciales de Supabase configuradas — el formulario de contacto responderá `503` hasta que se conecte la base de datos (ver más abajo).

## Conectar Supabase (al final, a cargo del cliente)

1. Crear un proyecto en [supabase.com](https://supabase.com)
2. Abrir el SQL Editor del proyecto y ejecutar, en orden, los archivos de [`/sql`](./sql)
3. Copiar `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` (Settings → API) al `.env` del proyecto
4. Reiniciar la API — no requiere cambios de código ni redeploy

## Notas

- Todos los datos de contacto, casos de éxito y estadísticas del sitio son **inventados para la fase de desarrollo** y deben reemplazarse antes de producción (ver sección 9 del plan maestro).
- Los archivos de logo son placeholders (wordmark + isotipo SVG) hasta que el cliente entregue los assets reales (`logo-full.png`, isotipo, versión blanca) en `apps/web/public/logo/`.
