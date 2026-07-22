import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Dynamic Casaments.",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-cream pb-24 pt-36 sm:pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-4xl text-carbon">Aviso legal</h1>
        <div className="prose-legal mt-8 space-y-6 text-carbon/75">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
            Comercio Electrónico (LSSI-CE), se informa de los siguientes datos: el presente sitio web es propiedad de{" "}
            {siteConfig.fullName}, con domicilio en {siteConfig.address.full}.
          </p>
          {/* TODO: sustituir por los datos fiscales reales del cliente (NIF/CIF, razón social, registro mercantil si procede) */}
          <p>
            <strong>Denominación:</strong> {siteConfig.name} — [TODO: NIF/CIF]
            <br />
            <strong>Domicilio:</strong> {siteConfig.address.full}
            <br />
            <strong>Contacto:</strong> {siteConfig.phone} / {siteConfig.email}
          </p>
          <h2 className="font-serif text-2xl text-carbon">Objeto</h2>
          <p>
            Dynamic Casaments pone a disposición de los usuarios el presente sitio web con el fin de dar a conocer
            sus servicios de fotografía y vídeo cinematográfico de bodas y eventos.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio web, incluyendo a título enunciativo textos, fotografías, gráficos,
            imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra
            cuya propiedad pertenece a Dynamic Casaments, sin que puedan entenderse cedidos al usuario ninguno de los
            derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Condiciones de uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Dynamic Casaments
            ofrece a través de su sitio web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la
            buena fe y al ordenamiento legal.
          </p>
          <h2 className="font-serif text-2xl text-carbon">Legislación aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia que pudiera
            derivarse del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales de
            Sabadell, salvo que la normativa aplicable disponga otra cosa.
          </p>
        </div>
      </Container>
    </div>
  );
}
