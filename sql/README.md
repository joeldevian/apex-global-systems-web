# Scripts SQL — Supabase

Estos scripts **no se ejecutan automáticamente**. Cópialos y pégalos en el **SQL Editor** de tu proyecto de Supabase, en orden numérico, cuando lo crees.

## Cómo ejecutar

1. Entra a [supabase.com](https://supabase.com) y crea (o abre) tu proyecto.
2. Ve a **SQL Editor → New query**.
3. Pega el contenido de `001_create_contacts_table.sql` y ejecuta (▶ Run).
4. Repite con cada script nuevo que se agregue a esta carpeta, siempre en orden.
5. Copia `Project URL` y `service_role key` (Settings → API) al archivo `.env` del proyecto, en `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`.

## Scripts

| Archivo | Qué hace |
|---|---|
| `001_create_contacts_table.sql` | Crea la tabla `public.contacts` donde se guardan los leads del formulario de contacto. Habilita Row Level Security (RLS) sin políticas públicas — solo el backend, usando la `service_role key`, puede leer/escribir. |

## Convención para scripts futuros

Si se necesitan tablas nuevas (casos de éxito, equipo o vacantes editables desde un futuro panel admin), se agregan como `00X_nombre.sql` numerados de forma incremental. Los scripts ya entregados **no se modifican** — cualquier cambio se hace en un script nuevo.
