# Dynamic Casaments — Web

Web profesional para **Dynamic Casaments — Fotografía Cinematográfica**, fotógrafos y videógrafos de bodas en
Sabadell y Barcelona.

## Stack técnico

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (tokens de marca en `tailwind.config.ts`)
- **Framer Motion** para animaciones (scroll reveal, parallax, transiciones)
- **Lucide React** para iconografía
- **react-hook-form + zod** para el formulario de contacto
- **yet-another-react-lightbox** para la galería
- **Google Gemini API** para el asistente de chat de soporte

## Cómo editar contenido (sin tocar código)

- **Textos (ES/CA/EN):** `content/dictionaries/es.json`, `ca.json`, `en.json`
- **Datos del negocio** (dirección, teléfono, redes, horario): `data/siteConfig.ts`
- **Paquetes de servicios:** dentro de cada diccionario, clave `services.packages`
- **Galería de fotos:** `data/gallery.ts`
- **Vídeos de Cinema:** `data/cinema.ts`
- **Artículos del blog "+ Ideas Dynamic":** `data/ideas.ts`

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz (no se sube a git) con:

```
GEMINI_API_KEY=tu_clave_de_google_ai_studio
GEMINI_MODEL=gemini-2.5-flash   # opcional, este es el valor por defecto
```

Consigue una clave gratuita en https://aistudio.google.com/apikey. Si despliegas en Vercel, añade estas mismas
variables en **Project → Settings → Environment Variables**. Sin `GEMINI_API_KEY`, el asistente de chat responde
con un error controlado en vez de fallar.

## Placeholders pendientes de sustituir antes de publicar

- **Vídeo del Hero:** colocar el vídeo real en `/public/videos/hero.mp4` (y opcionalmente `.webm`).
  Mientras no exista el archivo, se muestra automáticamente la imagen de fondo (poster).
- **Fotografías de la galería** (`data/gallery.ts`) y **de la sección Nosotros** (`components/sections/Nosotros.tsx`):
  actualmente son placeholders de Unsplash.
- **Vídeos de Cinema** (`data/cinema.ts`): los `embedUrl` apuntan a vídeos de ejemplo de Vimeo; sustituir por los
  vídeos reales del cliente.
- **Imagen Open Graph:** añadir `/public/og-image.jpg` (1200x630) para que las miniaturas al compartir en redes
  se vean correctamente.
- **Enlace real a Bodas.net:** `data/siteConfig.ts` → `reviews.bodasNet`.
- **Email de contacto real:** `data/siteConfig.ts` → `email`.
- **Dominio de producción:** `data/siteConfig.ts` → `url` (usado en metadata, sitemap y JSON-LD).
- **Proveedor de email del formulario de contacto:** `app/api/contact/route.ts` tiene un TODO para conectar
  Resend/SendGrid/etc. Actualmente solo registra la consulta en el log del servidor.
- **Google Analytics / Meta Pixel:** snippets comentados con TODO en `app/layout.tsx`.
- **Datos fiscales (NIF/CIF, razón social):** en `app/legal/aviso-legal/page.tsx` y `app/legal/privacidad/page.tsx`.
- **Reseñas de Opiniones:** los tres testimonios en los diccionarios (`testimonials.items`) son ilustrativos;
  sustituir por citas reales de clientes (con su permiso).
- **Clave de Gemini para el chat de soporte:** añadir `GEMINI_API_KEY` como variable de entorno (ver sección
  "Variables de entorno" más abajo). El texto que usa el asistente para responder está en `lib/chatSystemPrompt.ts`
  y hay que mantenerlo sincronizado si cambian precios o paquetes.

## Estructura de carpetas

```
app/                  Rutas (App Router): home, /ideas, /ideas/[slug], /legal/*, /api/contact
components/
  layout/             Header, Footer, WhatsAppButton, CookieBanner, PageLoader
  sections/           Una sección por bloque de la landing (Hero, Servicios, Galería...)
  ui/                  Componentes reutilizables (Button, Container, Reveal, SectionHeading...)
content/
  dictionaries/        Textos ES/CA/EN
  i18n-context.tsx      Contexto de idioma
data/                  Datos editables (servicios, galería, cinema, ideas, siteConfig)
lib/                   Validaciones (zod)
```
