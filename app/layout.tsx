import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/content/i18n-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { PageLoader } from "@/components/layout/PageLoader";
import { siteConfig } from "@/data/siteConfig";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dynamic Casaments | Fotografía y Vídeo Cinematográfico de Bodas",
    template: "%s | Dynamic Casaments",
  },
  description:
    "Fotografía y vídeo cinematográfico de bodas en Sabadell y Barcelona. Capturamos la emoción real de vuestro día para que la viváis para siempre.",
  keywords: [
    "fotógrafo de bodas Sabadell",
    "vídeo de bodas Barcelona",
    "fotografía de bodas Cataluña",
    "vídeo cinematográfico bodas",
    "fotógrafo bodas Barcelona",
  ],
  authors: [{ name: "Dynamic Casaments" }],
  openGraph: {
    title: "Dynamic Casaments | Fotografía y Vídeo Cinematográfico de Bodas",
    description:
      "Fotografía y vídeo cinematográfico de bodas en Sabadell y Barcelona. Capturamos la emoción real de vuestro día para que la viváis para siempre.",
    url: siteConfig.url,
    siteName: "Dynamic Casaments",
    locale: "es_ES",
    type: "website",
    // TODO: añadir imagen Open Graph real (1200x630) del cliente en /public/og-image.jpg
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dynamic Casaments — Fotografía Cinematográfica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Casaments | Fotografía y Vídeo Cinematográfico de Bodas",
    description: "Fotografía y vídeo cinematográfico de bodas en Sabadell y Barcelona.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  name: siteConfig.fullName,
  image: `${siteConfig.url}/og-image.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  areaServed: ["Sabadell", "Barcelona", "Cataluña"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-cream font-sans text-carbon antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/*
          TODO: Google Analytics 4 — descomentar y añadir el ID de medición real.
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');`}
          </Script>

          TODO: Meta Pixel — descomentar y añadir el ID de píxel real.
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){...fbq init...}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXX');
              fbq('track', 'PageView');`}
          </Script>
        */}
        <LanguageProvider>
          <PageLoader />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
