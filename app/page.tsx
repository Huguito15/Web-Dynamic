import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { IdeasDynamic } from "@/components/sections/IdeasDynamic";
import { Galeria } from "@/components/sections/Galeria";
import { Cinema } from "@/components/sections/Cinema";
import { Nosotros } from "@/components/sections/Nosotros";
import { Opiniones } from "@/components/sections/Opiniones";
import { Contacto } from "@/components/sections/Contacto";
import { Tienda } from "@/components/sections/Tienda";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <IdeasDynamic />
      <Galeria />
      <Cinema />
      <Nosotros />
      <Opiniones />
      <Contacto />
      <Tienda />
    </>
  );
}
