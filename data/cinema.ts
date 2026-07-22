export type CinemaCategory = "teaser" | "documentary" | "drone";

export type CinemaVideo = {
  id: string;
  category: CinemaCategory;
  title: string;
  couple: string;
  thumbnail: string;
  // TODO: Sustituir por el ID/embed real de Vimeo o YouTube del cliente.
  embedUrl: string;
};

// TODO: Reemplazar todos los vídeos por el material real de Dynamic Casaments.
export const cinemaVideos: CinemaVideo[] = [
  {
    id: "v1",
    category: "teaser",
    title: "Teaser · Laura & Marc",
    couple: "Finca La Garriga",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0",
  },
  {
    id: "v2",
    category: "documentary",
    title: "Documental completo · Anna & Jordi",
    couple: "Masía Can Ferran, Barcelona",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/22439234?title=0&byline=0&portrait=0",
  },
  {
    id: "v3",
    category: "drone",
    title: "Vistas aéreas · Celler Empordà",
    couple: "Carla & David",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/364402896?title=0&byline=0&portrait=0",
  },
  {
    id: "v4",
    category: "teaser",
    title: "Teaser · Marta & Pol",
    couple: "Sabadell",
    thumbnail: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0",
  },
  {
    id: "v5",
    category: "documentary",
    title: "Documental · Elena & Bruno",
    couple: "Castell de Peralada",
    thumbnail: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/22439234?title=0&byline=0&portrait=0",
  },
  {
    id: "v6",
    category: "drone",
    title: "Vistas aéreas · Costa Brava",
    couple: "Nuria & Àlex",
    thumbnail: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    embedUrl: "https://player.vimeo.com/video/364402896?title=0&byline=0&portrait=0",
  },
];
