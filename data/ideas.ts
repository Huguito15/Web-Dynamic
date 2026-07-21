export type IdeaPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};

// Contenido editorial del blog "+ Ideas Dynamic".
// NOTA: por ahora solo en español; si se traduce la web a CA/EN por completo,
// añadir aquí las variantes o migrar a un dictionary por idioma.
// TODO: sustituir imágenes por fotografías reales de Dynamic Casaments.
export const ideaPosts: IdeaPost[] = [
  {
    slug: "tendencias-bodas-2026",
    title: "5 tendencias de bodas que marcarán 2026",
    excerpt:
      "Del minimalismo editorial a las celebraciones de varios días: así serán las bodas más fotogénicas del próximo año.",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-10",
    readTime: "5 min",
    content: [
      "Cada año recorremos decenas de bodas por toda Cataluña y esto nos da una perspectiva privilegiada sobre hacia dónde evoluciona la celebración. Para 2026 vemos con claridad una vuelta a lo esencial: menos elementos, pero elegidos con mucho más criterio.",
      "La paleta de color se mueve hacia tonos tierra y champán, alejándose del blanco puro. Las flores locales y de temporada ganan terreno frente a los ramos importados, y la iluminación cálida vuelve a ser protagonista en los banquetes de noche.",
      "En cuanto al formato, cada vez más parejas optan por celebraciones de dos días: una cena íntima la víspera y la boda propiamente dicha al día siguiente, lo que nos permite documentar mucho mejor cada matiz emocional del proceso.",
      "Por último, el vídeo documental gana terreno frente al vídeo puramente estético. Las parejas quieren guardar los discursos completos, las conversaciones espontáneas y los pequeños detalles que normalmente pasan desapercibidos.",
    ],
  },
  {
    slug: "como-elegir-fotografo-boda",
    title: "Cómo elegir al fotógrafo de vuestra boda (sin arrepentiros después)",
    excerpt:
      "Las fotos y el vídeo son el único recuerdo tangible que os queda de vuestra boda. Os contamos qué preguntar antes de firmar.",
    category: "Planificación",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    date: "2026-01-22",
    readTime: "7 min",
    content: [
      "Cuando la boda termina, lo único que queda son los recuerdos y el archivo audiovisual. Por eso elegir bien a vuestro fotógrafo y videógrafo es una de las decisiones más importantes de toda la planificación.",
      "Preguntad siempre por el estilo documental frente al posado: cuánto tiempo se dedica a fotos dirigidas y cuánto a capturar momentos espontáneos. Pedid ver reportajes completos, no solo la selección de highlights en redes sociales.",
      "Aseguraos también de tener buena conexión personal con el equipo. Vais a compartir con ellos uno de los días más íntimos de vuestra vida, y esa cercanía se nota en el resultado final.",
      "Por último, revisad los tiempos de entrega, qué incluye exactamente cada paquete y si existe la posibilidad de un teaser rápido para compartir con los invitados al día siguiente.",
    ],
  },
  {
    slug: "sesion-preboda-ideas",
    title: "Ideas para una sesión de preboda que no parezca un posado",
    excerpt: "Consejos para sentiros cómodos frente a la cámara y conseguir imágenes naturales y llenas de complicidad.",
    category: "Ideas de sesión",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    date: "2025-12-15",
    readTime: "4 min",
    content: [
      "La sesión de preboda es mucho más que unas fotos bonitas: es la primera vez que os enfrentáis a la cámara juntos, y os ayuda a llegar mucho más relajados al día de la boda.",
      "Elegid un lugar que signifique algo para vosotros: donde os disteis el primer beso, donde os pedisteis matrimonio, o simplemente un rincón de la ciudad que os encante.",
      "Nuestro consejo: olvidaos de posar. Caminad, reíd, contad una anécdota. Nosotros nos encargamos de capturar la magia mientras vosotros simplemente disfrutáis el momento.",
      "La luz dorada del atardecer es nuestra aliada favorita para este tipo de sesiones: cálida, favorecedora y profundamente cinematográfica.",
    ],
  },
  {
    slug: "planificacion-timeline-boda",
    title: "El timeline perfecto para que el fotógrafo no se pierda ni un momento",
    excerpt: "Una guía práctica para organizar los horarios del día y asegurar una cobertura completa sin prisas.",
    category: "Planificación",
    image: "https://images.unsplash.com/photo-1594394436267-f4d4b8f1a5cc?q=80&w=1200&auto=format&fit=crop",
    date: "2025-11-30",
    readTime: "6 min",
    content: [
      "Uno de los errores más comunes al planificar una boda es subestimar el tiempo necesario para cada momento clave. Un timeline bien pensado es el mejor regalo que le podéis hacer a vuestro equipo audiovisual.",
      "Recomendamos reservar al menos 45 minutos para los preparativos de cada uno de los novios, y no escatimar tiempo en la ceremonia: es el momento que más se repite al ver el vídeo con los años.",
      "La hora dorada, ese momento justo antes del atardecer, merece un hueco reservado en la agenda para una mini sesión de pareja: son los planos que después se enmarcan en casa.",
      "Y recordad: siempre sobra tiempo si lo mimáis desde el principio. Un buen timeline reduce el estrés del día y se nota en las fotografías finales.",
    ],
  },
  {
    slug: "boda-intima-vs-boda-grande",
    title: "Boda íntima o gran celebración: qué esperar de cada formato",
    excerpt: "Ni mejor ni peor, simplemente diferentes. Analizamos ventajas de cada estilo desde nuestra experiencia.",
    category: "Tendencias",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
    date: "2025-10-18",
    readTime: "5 min",
    content: [
      "Cada vez vemos más parejas optando por celebraciones íntimas de menos de 50 invitados. El resultado suele ser una atmósfera mucho más emocional y cercana, con momentos que en bodas más grandes pasan desapercibidos.",
      "Las grandes celebraciones, por su parte, ofrecen una energía especial: la fiesta se vive de forma colectiva y la cantidad de historias que se cruzan durante el día multiplica las posibilidades narrativas de nuestro trabajo.",
      "Da igual el tamaño: lo que realmente importa es que la celebración refleje quiénes sois como pareja. Nuestro trabajo es adaptarnos a ese formato, nunca al revés.",
    ],
  },
  {
    slug: "que-incluir-album-fotografico",
    title: "Qué incluir en vuestro álbum fotográfico para que envejezca bien",
    excerpt: "El álbum es el objeto que vuestros nietos hojearán algún día. Os damos las claves para que sea atemporal.",
    category: "Ideas de sesión",
    image: "https://images.unsplash.com/photo-1546032996-6098d3053905?q=80&w=1200&auto=format&fit=crop",
    date: "2025-09-05",
    readTime: "4 min",
    content: [
      "Un buen álbum no es una colección de las 'mejores' fotos, es una narración con principio, nudo y desenlace: los preparativos, la ceremonia, los retratos, el banquete y la fiesta.",
      "Recomendamos incluir también los detalles: la invitación, las alianzas, el menú, el ramo. Son los pequeños objetos que con el tiempo se pierden y que en el álbum permanecen intactos.",
      "Elegid materiales de calidad. Un álbum impreso con buen papel y una encuadernación cuidada envejece con dignidad y se convierte en una auténtica pieza de familia.",
    ],
  },
];
