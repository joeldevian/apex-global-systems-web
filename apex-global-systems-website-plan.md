# APEX GLOBAL SYSTEMS — Plan de Implementación del Sitio Web
### Documento maestro para el agente implementador
Referencia de estilo/estructura: https://teamq.biz/ (solo layout, animaciones y flujo — colores y tipografía son de Apex Global Systems)

---

## 0. Cómo usar este documento

Este archivo es el **prompt/spec completo** que le puedes pegar a un agente de código (Claude Code, Cursor, etc.) para que construya el proyecto de punta a punta. Contiene:

1. Identidad de marca (fuente de verdad)
2. Arquitectura técnica y decisiones de stack
3. Estructura de carpetas completa (monorepo)
4. Especificación de la API (NestJS)
5. Contenido final de cada sección del sitio (copy listo, no placeholder)
6. Mapeo de animaciones/componentes de la página de referencia → implementación
7. Fases de implementación sugeridas
8. Notas de assets (iconos/imágenes libres para fase de desarrollo)

---

## 1. Identidad de Marca (fuente de verdad: manual de marca)

| Token | Valor | Uso |
|---|---|---|
| `--color-red` (Rojo Corporativo) | `#B3151F` | Marca, ícono del lobo, acentos, CTAs, hover |
| `--color-black` (Negro Carbón) | `#1A1A1A` | Texto principal, wordmark "GLOBAL SYSTEMS" |
| `--color-gray` (Gris Grafito) | `#5C5C5C` | Texto secundario, líneas, bordes |
| `--color-bg` (Blanco/Off-white) | `#FAFAFA` | Fondo base, espacios negativos |
| `--color-white` | `#FFFFFF` | Tarjetas, contraste sobre negro |

**Regla dura:** no introducir un tercer color saturado (nada de azul, dorado, verde vivo). El contraste rojo+negro sobre blanco es la identidad completa. Estados de éxito/error de formularios pueden usar variaciones de gris/rojo, no verde/azul saturado.

**Tipografía:**
- Títulos / logotipo / números de stats: `Montserrat Bold` o `Poppins SemiBold` (usar Montserrat vía `next/font/google`)
- Cuerpo de texto: `Inter` (vía `next/font/google`)

**Logo:**
- Versión completa (`Logo.png`, lobo + montaña + wordmark) → header, footer, propuestas, og:image
- Solo el isotipo (lobo + montaña, sin texto) → favicon, apple-touch-icon, marca de agua, loader
- Regla de contraste: ícono siempre en rojo, texto siempre en negro, solo sobre fondo blanco/`#FAFAFA` o negro puro `#1A1A1A` — nunca sobre fondos de color.
- Variante monocromática blanca disponible para el footer oscuro (según la lámina de identidad visual: logo en blanco sobre negro).

**Tono de voz (aplicar en todo el copy del sitio):**
- Directo, sin promesas exageradas, respaldado en casos concretos.
- Español, cliente local: didáctico y cercano — evitar jerga sin explicarla ("agente de IA" siempre se explica en una frase simple la primera vez que aparece).
- Frase síntesis de marca (usar en el hero): **"Convertimos negocios tradicionales en negocios inteligentes."**

---

## 2. Arquitectura técnica

**Decisión de stack (confirmada con el cliente):** monorepo con dos aplicaciones separadas.

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion (animaciones) + React Hook Form + Zod (validación de formularios)
- **Backend:** NestJS (TypeScript) — expone API REST, valida y procesa el formulario de contacto, y deja preparada la base para futuro CMS (casos de éxito, vacantes, equipo editables sin tocar código)
- **Base de datos:** **Supabase** (Postgres gestionado). El backend NestJS se conecta con `@supabase/supabase-js` usando la `service_role key` (nunca se expone al frontend). No se usa Prisma ni ORM con migraciones automáticas — el agente **no crea el proyecto de Supabase ni ejecuta nada contra él**; solo entrega los archivos `.sql` necesarios en `/sql`, listos para que el cliente los copie y ejecute en el SQL Editor de Supabase cuando cree su proyecto.
- **Conexión:** se deja para el final, a cargo del cliente. El agente deja `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` como variables vacías en `.env.example`; el proyecto debe correr y compilar sin esas credenciales configuradas (el endpoint de contacto simplemente fallará con un error controlado hasta que se configuren).
- **Infra dev:** Docker Compose solo para `api` + `web` (ya no hay contenedor de base de datos local — la DB vive en Supabase, remota)
- **Gestor de paquetes:** pnpm + workspaces
- **Comunicación front↔back:** REST vía `fetch`, tipos compartidos en `packages/shared-types`

Por qué dos apps separadas y no NestJS con vistas server-side: se necesitan animaciones ricas tipo SPA (scroll reveals, contadores animados, modales, transiciones), y Next.js está hecho para eso con SSR/SEO de fábrica; NestJS queda libre para escalar como API pura (futuro dashboard admin, integraciones con WhatsApp/agentes de IA que menciona el propio pitch de la empresa).

---

## 3. Estructura de carpetas (monorepo)

```
apex-global-systems/
├── apps/
│   ├── web/                          # Next.js frontend
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Home (una sola página larga, como teamq.biz)
│   │   │   ├── globals.css
│   │   │   ├── favicon.ico
│   │   │   └── api/                  # (opcional) route handlers proxy si hace falta
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx        # sticky, shrink on scroll, menú móvil
│   │   │   │   └── Footer.tsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── StatsBar.tsx      # contadores animados
│   │   │   │   ├── AboutUs.tsx       # Quiénes Somos
│   │   │   │   ├── Services.tsx      # 3 líneas de servicio + transversal
│   │   │   │   ├── CaseStudies.tsx   # grid + modal
│   │   │   │   ├── Team.tsx          # grid + modal
│   │   │   │   ├── TechStack.tsx     # marquee/grid de logos
│   │   │   │   ├── Process.tsx       # diagnóstico → propuesta → desarrollo → soporte
│   │   │   │   └── Contact.tsx       # formulario + datos + mapa
│   │   │   ├── ui/
│   │   │   │   ├── AnimatedCounter.tsx
│   │   │   │   ├── RevealOnScroll.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Button.tsx
│   │   │   │   └── SectionHeading.tsx
│   │   ├── content/                  # contenido tipado, editable sin tocar componentes
│   │   │   ├── company.ts
│   │   │   ├── services.ts
│   │   │   ├── caseStudies.ts
│   │   │   ├── team.ts
│   │   │   ├── techStack.ts
│   │   │   └── stats.ts
│   │   ├── lib/
│   │   │   ├── api.ts                # cliente fetch hacia NestJS
│   │   │   └── animations.ts         # variants de Framer Motion reutilizables
│   │   ├── public/
│   │   │   ├── logo/
│   │   │   │   ├── logo-full.png
│   │   │   │   ├── logo-icon.png
│   │   │   │   └── logo-white.png
│   │   │   ├── images/
│   │   │   │   ├── team/              # fotos libres (Unsplash/Pexels) por integrante
│   │   │   │   └── cases/             # imágenes libres por caso de éxito
│   │   │   └── icons/                 # lucide-react se usa como componente, no como archivo
│   │   ├── next.config.js
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── api/                          # NestJS backend
│       ├── src/
│       │   ├── main.ts
│       │   ├── app.module.ts
│       │   ├── common/
│       │   │   ├── filters/http-exception.filter.ts
│       │   │   ├── interceptors/logging.interceptor.ts
│       │   │   └── pipes/validation.pipe.ts
│       │   ├── config/
│       │   │   └── configuration.ts
│       │   ├── contact/
│       │   │   ├── contact.module.ts
│       │   │   ├── contact.controller.ts
│       │   │   ├── contact.service.ts
│       │   │   ├── dto/create-contact.dto.ts
│       │   │   └── entities/contact.entity.ts
│       │   ├── mail/
│       │   │   ├── mail.module.ts
│       │   │   └── mail.service.ts   # envío de notificación (stub en dev)
│       │   ├── health/
│       │   │   └── health.controller.ts
│       │   └── supabase/
│       │       ├── supabase.module.ts
│       │       └── supabase.service.ts   # wrapper de @supabase/supabase-js con service_role key
│       ├── test/
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── shared-types/
│       ├── src/
│       │   ├── contact.types.ts
│       │   └── index.ts
│       └── package.json
│
├── sql/                               # ← el agente deja aquí los .sql que el cliente ejecuta manualmente en Supabase
│   ├── 001_create_contacts_table.sql
│   └── README.md                      # instrucciones: copiar y pegar en el SQL Editor de Supabase, en orden
│
├── docker-compose.yml                 # solo api + web, sin contenedor de base de datos
├── pnpm-workspace.yaml
├── package.json
├── .env.example
└── README.md
```

---

## 4. Especificación de la API (NestJS)

Alcance de la fase de desarrollo: **un solo flujo real** (formulario de contacto), el resto del sitio es contenido estático tipado en el frontend, listo para migrar a la API cuando haya un panel admin.

### `POST /api/contact`
Body (DTO validado con `class-validator`):
```ts
{
  name: string;        // min 2
  email: string;        // email válido
  phone?: string;
  company?: string;
  serviceInterest: 'presencia-sistemas' | 'automatizacion' | 'agentes-ia' | 'no-seguro';
  message: string;      // min 10
}
```
Comportamiento:
- Inserta el lead en Supabase (tabla `contacts`) usando `SupabaseService` (cliente `@supabase/supabase-js` inicializado con `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`)
- Si las variables de entorno de Supabase no están configuradas, el servicio responde `503` con un mensaje claro ("base de datos no configurada") en vez de romper el arranque de la app — así el resto del sitio funciona aunque la conexión aún no exista
- Dispara `MailService.notifyNewLead()` (en dev: log a consola / o Nodemailer con cuenta de prueba Ethereal; en prod: proveedor real por definir)
- Rate limit básico (`@nestjs/throttler`) para evitar spam del formulario
- Responde `201` con `{ success: true }` o `400`/`503` con el error correspondiente

### `GET /api/health`
Healthcheck simple para Docker/monitoring. Incluye un flag `supabaseConfigured: boolean` para saber de un vistazo si ya se cargaron las credenciales.

### Tabla de Supabase (entregada como SQL, no como ORM)
El agente **no ejecuta esto contra ningún proyecto** — solo lo deja en `sql/001_create_contacts_table.sql` para que el cliente lo copie y pegue en el SQL Editor de Supabase cuando cree su proyecto:

```sql
create table if not exists public.contacts (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  email              text not null,
  phone              text,
  company            text,
  service_interest   text not null check (service_interest in (
                        'presencia-sistemas', 'automatizacion', 'agentes-ia', 'no-seguro'
                     )),
  message            text not null,
  created_at         timestamptz not null default now()
);

-- RLS: la tabla solo se escribe/lee desde el backend con la service_role key,
-- así que se bloquea el acceso público por defecto.
alter table public.contacts enable row level security;
```

Si más adelante se necesitan tablas nuevas (casos de éxito, equipo, vacantes editables desde un panel admin), el agente debe seguir el mismo patrón: agregar `sql/00X_nombre.sql` numerado, nunca modificar uno ya entregado — y avisar en el chat qué tabla creó y para qué sirve, para que el cliente lo copie a Supabase.

---

## 5. Mapeo de la referencia (teamq.biz) → componentes de Apex

La referencia se visitó y su estructura de secciones/animaciones es la guía de **layout y comportamiento**, no de contenido ni color:

| Sección en teamq.biz | Componente Apex | Comportamiento a replicar |
|---|---|---|
| Header con menú + selector de idioma | `Header.tsx` | Sticky, se encoge al hacer scroll, menú hamburguesa en móvil con overlay de pantalla completa. **Sin selector de idioma** (Apex es un solo mercado, español) |
| Hero con tagline + botón CTA | `Hero.tsx` | Fade-in + slide-up del headline, botón con hover que invierte color (fondo rojo↔blanco) |
| Barra de stats (75+ Clientes, 97% Satisfacción...) | `StatsBar.tsx` | Contadores que animan de 0 al número final cuando entran al viewport (Intersection Observer + Framer Motion `useInView`) |
| "¿Quiénes Somos?" con botón "Ver más" | `AboutUs.tsx` | Texto + imagen, reveal on scroll desde el lateral |
| Grid de 4 tarjetas de productos/servicios | `Services.tsx` | Tarjetas con ícono (lucide-react), hover con elevación (shadow + translateY), agrupadas por las 3 líneas de servicio de Apex |
| "Casos de Éxito" grid con modal al hacer click | `CaseStudies.tsx` | Grid de logos/tarjetas → click abre `Modal.tsx` con descripción del caso, animación de escala+fade al abrir, overlay oscuro con blur |
| "Conoce a Nuestro Equipo" | `Team.tsx` | Tarjetas de personas con foto, hover revela cargo/bio, mismo patrón de modal para bio extendida (opcional) |
| "Nuestro Tech Stack" (logos) | `TechStack.tsx` | Grid o marquee horizontal infinito de logos de tecnologías, escala de grises → color al hover |
| Vacantes con modal "Trabaja con Nosotros" | *(fuera de alcance v1 — Apex es equipo fundador chico; se omite o se deja como sección simple "Únete al equipo" con mailto, sin sistema de vacantes)* |
| Sección de contacto + CTA "Cotiza" | `Contact.tsx` | Formulario con validación en tiempo real, estados de envío (loading/success/error) animados |
| Footer con datos legales, redes, contacto | `Footer.tsx` | Logo en blanco sobre negro, columnas de navegación, íconos de redes (lucide-react: `Linkedin`, `Facebook`, `Instagram`, `MessageCircle` para WhatsApp) |

**Librería de animación:** Framer Motion en todo el frontend. Patrón estándar de reveal:
```tsx
// lib/animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
```
Envolver cada sección con `RevealOnScroll` (wrapper de `motion.div` + `whileInView`).

---

## 6. Contenido final del sitio (copy listo para usar)

### 6.1 Navegación (Header)
`Quiénes Somos` · `Servicios` · `Casos de Éxito` · `Equipo` · `Contacto` — botón CTA: **"Cotiza tu Proyecto"**

### 6.2 Hero
- Eyebrow: `Desarrollo de Software · Automatización · Inteligencia Artificial`
- Headline: **"Convertimos negocios tradicionales en negocios inteligentes."**
- Subheadline: *"Diseñamos, construimos y automatizamos los sistemas que tu negocio necesita para operar y crecer sin depender de más personal — desde tu presencia web hasta agentes de IA conectados en tiempo real a tu operación."*
- CTA primario: `Cotiza tu Proyecto` · CTA secundario: `Ver Casos de Éxito`

### 6.3 Barra de estadísticas
| Número | Etiqueta |
|---|---|
| 15+ | Proyectos Entregados |
| 98% | Satisfacción de Clientes |
| 3 | Líneas de Servicio |
| 24/7 | Soporte y Monitoreo |
| 4 | Especialistas en el Equipo |

### 6.4 Quiénes Somos
> Apex Global Systems nace en Ayacucho, Perú, con una idea simple: los negocios locales merecen la misma tecnología que hoy solo usan las grandes empresas — automatización, datos e inteligencia artificial — sin necesitar un equipo técnico propio. Diseñamos sistemas a medida, los conectamos entre sí y los dejamos funcionando para que tu negocio crezca sin fricción.

**Misión:** Dar a los negocios locales acceso a la misma tecnología que hoy solo usan las grandes empresas, sin que necesiten un equipo técnico propio.
**Visión:** Ser la referencia en sistemas inteligentes para negocios en Latinoamérica hacia el año 2030.

### 6.5 Servicios
**Línea 1 — Presencia y Sistemas**
- Sitios web institucionales y comerciales
- Sistemas de gestión a medida

**Línea 2 — Automatización e Inteligencia**
- Automatizaciones de procesos
- Inteligencia de datos

**Línea 3 — Agentes**
- Agentes de IA *(explicado en una línea simple: "asistentes que responden, agendan y venden por ti, todos los días")*

**Transversal (aplica a todo servicio):** Diagnóstico inicial gratuito · Mantenimiento y soporte continuo

### 6.6 Casos de Éxito (contenido inventado para fase de desarrollo)
1. **Botica San Miguel** — Sitio web institucional + sistema de gestión de inventario para una farmacia de Ayacucho.
2. **Transportes Wari S.A.C.** — Sistema de gestión de flota y rutas para una empresa de transporte interprovincial.
3. **Restaurante Puka Wasi** — Sitio web + agente de IA que toma reservas y pedidos por WhatsApp.
4. **Constructora Andina EIRL** — Automatización de cotizaciones y seguimiento de avance de obras.
5. **Textiles Huamanga** — Panel de inteligencia de datos en tiempo real para ventas y stock.
6. **Clínica San Cristóbal** — Agente de IA para agendamiento de citas médicas.

*(Cada tarjeta: nombre, rubro, línea de servicio aplicada, una imagen libre representativa (Unsplash/Pexels), y en el modal 2-3 líneas de descripción del reto/solución.)*

### 6.7 Equipo
1. **Joel Ircañaupa Yaurimo ("Deivid")** — Fundador y Director. Ingeniero de Sistemas (UNSCH). Full-stack developer especializado en automatización e IA aplicada a negocios.
2. **Ana Lucía Quispe Huamán** — Desarrolladora Backend & Automatización. Node.js, NestJS, integraciones de sistemas.
3. **Renzo Damián Cárdenas Palomino** — Desarrollador Frontend & UI/UX. React, Next.js, diseño de interfaces.
4. **Fiorella Camacho Rojas** — Especialista en Inteligencia de Datos y Agentes de IA. Python, análisis de datos, LLMs.

*(Fotos: usar retratos libres de Unsplash/Pexels ("professional headshot" + filtros por género/edad razonables) como placeholder de fase de desarrollo — reemplazables después por fotos reales.)*

### 6.8 Tech Stack (logos a mostrar)
NestJS · Next.js · React · TypeScript · PostgreSQL · Docker · Tailwind CSS · n8n · OpenAI/LLMs

### 6.9 Proceso de trabajo
`1. Diagnóstico inicial` → `2. Propuesta y cotización` → `3. Desarrollo` → `4. Entrega y soporte continuo`

### 6.10 Contacto (datos inventados para fase de desarrollo — reemplazar antes de producción)
- Email: `contacto@apexglobalsystems.pe`
- Teléfono / WhatsApp: `+51 966 123 456`
- Dirección: `Jr. Asamblea 220, Ayacucho, Perú`
- Redes (solo íconos, enlaces placeholder `#`): LinkedIn · Facebook · Instagram · WhatsApp

### 6.11 Footer
Logo (versión blanca) · columnas: Navegación / Servicios / Contacto · íconos de redes · línea legal: `© 2026 Apex Global Systems. Todos los derechos reservados.`

---

## 7. Assets — fase de desarrollo (todo libre de derechos)

- **Iconografía UI:** `lucide-react` (ya incluido como dependencia, sin descargas)
- **Fotos de equipo/casos de éxito:** Unsplash o Pexels vía URL directa (`images.unsplash.com/...`), o el paquete `unsplash-source` para desarrollo rápido
- **Logo:** usar los tres archivos ya provistos por el cliente (`logo-full.png`, y derivar `logo-icon.png` recortando solo el isotipo, y `logo-white.png` invirtiendo a blanco para el footer)
- No usar ningún ícono, foto o logo de terceros con copyright (nada de logos reales de marcas para "clientes" — los casos de éxito son ficticios para esta fase, así que se ilustran con fotos genéricas de stock, no con logos de empresas reales)

---

## 8. Fases de implementación sugeridas

1. **Setup del monorepo** — pnpm workspaces, Docker Compose (api + web, sin DB local), linters, Tailwind + tema con los tokens de marca
2. **Backend mínimo** — NestJS + `SupabaseService` + endpoint de contacto + healthcheck, funcionando en modo "sin credenciales" (ver sección 4)
3. **Frontend — layout y hero** — Header, Footer, Hero, tema tipográfico y de color
4. **Frontend — secciones de contenido** — Stats, Quiénes Somos, Servicios, Tech Stack, Proceso
5. **Frontend — Casos de Éxito y Equipo** — grids + sistema de modal reutilizable
6. **Frontend — Contacto** — formulario conectado al backend, validación, estados de UI
7. **Pulido de animaciones** — revisar cada reveal, hover y transición contra el mapeo de la sección 5
8. **Responsive + accesibilidad** — mobile-first, contraste AA, navegación por teclado en modales
9. **QA de contenido** — reemplazar datos de contacto/casos ficticios antes de producción
10. **Conexión a Supabase (al final)** — el cliente crea el proyecto en Supabase, ejecuta los `.sql` de `/sql` en orden, y completa `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` en `.env`. No requiere tocar código ni redeploy del agente — solo variables de entorno.

---

## 9. Notas finales para quien lo implemente

- Colores y tipografía son **no negociables** (manual de marca, sección 1). Todo lo demás (layout, timing de animaciones, estructura de grid) se inspira libremente en teamq.biz.
- El contenido de la sección 6 está listo para pegar tal cual en `content/*.ts` — no es placeholder, es copy final aprobado para la fase de desarrollo.
- Todos los datos de contacto, casos de éxito y estadísticas están marcados como **inventados** y deben confirmarse/reemplazarse por el cliente antes de salir a producción.
