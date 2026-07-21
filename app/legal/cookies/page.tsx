import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Información sobre el uso de cookies en el sitio web de Dynamic Casaments.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="bg-cream pb-24 pt-36 sm:pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-4xl text-carbon">Política de cookies</h1>
        <div className="mt-8 space-y-6 text-carbon/75">
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y, en su
            caso, analizar el uso que hacéis del sitio. A continuación os explicamos qué son y cómo las usamos.
          </p>
          <h2 className="font-serif text-2xl text-carbon">¿Qué es una cookie?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que se almacena en vuestro navegador cuando visitáis un sitio
            web. Sirve, entre otras cosas, para recordar vuestras preferencias o analizar cómo se usa la web.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Cookies que utilizamos</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cookies técnicas (necesarias):</strong> permiten el funcionamiento básico del sitio, como
              recordar vuestra preferencia de idioma o vuestra decisión sobre este mismo aviso de cookies.
            </li>
            <li>
              <strong>Cookies analíticas (opcionales):</strong> nos permiten entender cómo interactúan las personas
              visitantes con el sitio para mejorar su contenido y funcionamiento.
              {/* TODO: si se activa Google Analytics, detallar aquí el nombre y la duración exacta de sus cookies (_ga, _gid...) */}
            </li>
          </ul>
          <h2 className="font-serif text-2xl text-carbon">Gestión de cookies</h2>
          <p>
            Podéis aceptar o rechazar las cookies no esenciales desde el banner que aparece en vuestra primera visita.
            También podéis eliminar o bloquear las cookies en cualquier momento desde la configuración de vuestro
            navegador.
          </p>
        </div>
      </Container>
    </div>
  );
}
