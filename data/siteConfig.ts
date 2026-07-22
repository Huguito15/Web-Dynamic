export const siteConfig = {
  name: "Dynamic Casaments",
  fullName: "Dynamic Casaments — Fotografía Cinematográfica",
  slogan: "El componente más importante de una cámara está detrás de ella",
  phone: "600 51 64 25",
  phoneHref: "tel:+34600516425",
  whatsappNumber: "34600516425",
  email: "hola@dynamiccasaments.com", // TODO: sustituir por email real del cliente
  address: {
    street: "Calle de Cerdanyola 55",
    postalCode: "08203",
    city: "Sabadell",
    region: "Barcelona, Cataluña",
    full: "Calle de Cerdanyola 55, 08203, Sabadell (Barcelona, Cataluña)",
  },
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Calle+de+Cerdanyola+55,+08203+Sabadell,+Barcelona&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Calle+de+Cerdanyola+55%2C+08203+Sabadell%2C+Barcelona",
  social: {
    facebook: "https://www.facebook.com/dynamicasamentsfotografia",
    instagram: "https://www.instagram.com/dynamic_casaments_fotografia",
  },
  reviews: {
    bodasNet: "https://www.bodas.net/fotografos-de-boda/dynamic-casaments--e123456", // TODO: sustituir por la URL real del perfil en Bodas.net
  },
  schedule: [
    { day: "Lunes - Viernes", hours: "10:00 - 20:00" },
    { day: "Sábados", hours: "Con cita previa" },
    { day: "Domingos", hours: "Cerrado" },
  ],
  languages: ["es", "ca", "en"] as const,
  url: "https://www.dynamiccasaments.com", // TODO: sustituir por el dominio real de producción
} as const;

export type SiteConfig = typeof siteConfig;
