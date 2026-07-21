import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad y protección de datos de Dynamic Casaments.",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="bg-cream pb-24 pt-36 sm:pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-4xl text-carbon">Política de privacidad</h1>
        <div className="mt-8 space-y-6 text-carbon/75">
          <p>
            En Dynamic Casaments nos tomamos muy en serio la protección de vuestros datos personales. Esta política
            explica cómo recogemos, usamos y protegemos la información que nos facilitáis a través de este sitio
            web, en cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD).
          </p>
          <h2 className="font-serif text-2xl text-carbon">Responsable del tratamiento</h2>
          {/* TODO: sustituir por los datos fiscales reales del cliente (NIF/CIF) */}
          <p>
            {siteConfig.fullName}, con domicilio en {siteConfig.address.full} y correo de contacto {siteConfig.email}.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Datos que recogemos</h2>
          <p>
            A través del formulario de contacto recogemos: nombre, correo electrónico, teléfono, fecha aproximada de
            la boda y el mensaje que nos escribáis. No recogemos datos de menores de edad ni categorías especiales de
            datos.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Finalidad del tratamiento</h2>
          <p>
            Utilizamos vuestros datos exclusivamente para responder a vuestra consulta, elaborar presupuestos y, si
            procede, gestionar la relación contractual del servicio fotográfico o de vídeo contratado.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Conservación de los datos</h2>
          <p>
            Los datos se conservarán mientras exista un interés mutuo para mantener el contacto y, en su caso,
            durante los plazos legalmente exigidos tras la finalización de la relación contractual.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Derechos de las personas usuarias</h2>
          <p>
            Podéis ejercer vuestros derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad escribiendo a {siteConfig.email}, adjuntando copia de un documento que acredite vuestra
            identidad.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Cesión de datos a terceros</h2>
          <p>
            No cedemos vuestros datos a terceros, salvo obligación legal o proveedores tecnológicos necesarios para
            la prestación del servicio (por ejemplo, el proveedor de envío de emails), quienes actúan como
            encargados del tratamiento.
          </p>
        </div>
      </Container>
    </div>
  );
}
