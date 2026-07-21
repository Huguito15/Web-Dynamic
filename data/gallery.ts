export type GalleryCategory = "wedding" | "preboda" | "detail" | "party";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// TODO: Sustituir todas las imágenes por el material real de Dynamic Casaments.
// Placeholders de Unsplash con temática de bodas/fotografía cinematográfica.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "wedding", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", alt: "Pareja de novios abrazados durante la ceremonia", width: 1200, height: 1500 },
  { id: "g2", category: "detail", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop", alt: "Detalle de anillos de boda sobre tela de raso", width: 1200, height: 900 },
  { id: "g3", category: "wedding", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop", alt: "Novios caminando de la mano hacia el altar", width: 1200, height: 1600 },
  { id: "g4", category: "party", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", alt: "Invitados bailando durante la celebración nocturna", width: 1200, height: 900 },
  { id: "g5", category: "preboda", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop", alt: "Pareja durante sesión de preboda al atardecer", width: 1200, height: 1500 },
  { id: "g6", category: "detail", src: "https://images.unsplash.com/photo-1546032996-6098d3053905?q=80&w=1200&auto=format&fit=crop", alt: "Ramo de novia con flores blancas y verdes", width: 1200, height: 1600 },
  { id: "g7", category: "wedding", src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1200&auto=format&fit=crop", alt: "Novia riendo con su padre antes de la ceremonia", width: 1200, height: 900 },
  { id: "g8", category: "party", src: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?q=80&w=1200&auto=format&fit=crop", alt: "Brindis de los novios con copas de cava", width: 1200, height: 1500 },
  { id: "g9", category: "wedding", src: "https://images.unsplash.com/photo-1594394436267-f4d4b8f1a5cc?q=80&w=1200&auto=format&fit=crop", alt: "Primer beso de los recién casados", width: 1200, height: 1600 },
  { id: "g10", category: "detail", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", alt: "Mesa decorada con velas y menaje elegante", width: 1200, height: 900 },
  { id: "g11", category: "preboda", src: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop", alt: "Pareja abrazada en un campo al atardecer", width: 1200, height: 1600 },
  { id: "g12", category: "party", src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop", alt: "Invitados aplaudiendo durante el banquete", width: 1200, height: 900 },
  { id: "g13", category: "wedding", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop", alt: "Novia mirando por la ventana antes de salir", width: 1200, height: 1500 },
  { id: "g14", category: "detail", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop", alt: "Zapatos y complementos de la novia", width: 1200, height: 1600 },
  { id: "g15", category: "wedding", src: "https://images.unsplash.com/photo-1495434942214-9b525bb98a20?q=80&w=1200&auto=format&fit=crop", alt: "Novios bajo un arco de flores naturales", width: 1200, height: 900 },
  { id: "g16", category: "party", src: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop", alt: "Pista de baile iluminada durante la fiesta", width: 1200, height: 1500 },
];
