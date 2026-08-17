# Apex Global Systems — Sitio Web

Sitio institucional de Apex Global Systems. Next.js 14 (App Router) + Tailwind CSS + Framer Motion. Proyecto 100% frontend, sin backend propio.

> Referencia de layout/estructura usada durante el desarrollo: [teamq.biz](https://teamq.biz) (solo estructura y animaciones — colores y tipografía son de Apex Global Systems, ver `apex-global-systems-website-plan.md`).

## Estructura

```
app/
  page.tsx                Inicio (hero, resumen/teaser de cada sección)
  quienes-somos/           Historia, misión y visión completas
  servicios/                Los 7 servicios en detalle
  casos-de-exito/           Grid completo de casos + modal
  equipo/                    Grid completo del equipo
  contacto/                  Formulario + datos + mapa
  metodologia/                Metodología de trabajo (Scrum)
components/                Componentes de UI y de secciones
content/                    Contenido del sitio (textos, datos)
lib/                        Utilidades y cliente de envío del formulario
public/                     Imágenes y assets estáticos
scripts/                    Scripts de mantenimiento (ej. optimización de imágenes)
```

## Requisitos

- Node.js ≥ 20
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Web: http://localhost:3000

## Formulario de contacto

El formulario todavía **no está conectado a un servicio de email real** — `lib/api.ts` simula el envío (ver el `TODO` en ese archivo). Cuando se defina el proveedor (Resend, Web3Forms, EmailJS, etc.), se conecta ahí.

## Notas

- Todos los datos de contacto, casos de éxito y estadísticas del sitio son **inventados para la fase de desarrollo** y deben reemplazarse antes de producción (ver sección 9 del plan maestro).
