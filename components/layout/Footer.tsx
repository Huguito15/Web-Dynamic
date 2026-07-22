"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { useLanguage } from "@/content/i18n-context";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";

const navSections = [
  { href: "/#servicios", key: "services" },
  { href: "/#ideas", key: "ideas" },
  { href: "/#galeria", key: "gallery" },
  { href: "/#cinema", key: "cinema" },
  { href: "/#nosotros", key: "about" },
  { href: "/#opiniones", key: "testimonials" },
  { href: "/#contacto", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-cream/80">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/#inicio" className="font-serif text-2xl text-cream">
              Dynamic <span className="text-champagne">Casaments</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{t.footer.description}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors duration-400 hover:border-champagne hover:text-champagne"
              >
                <FacebookIcon width={18} height={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors duration-400 hover:border-champagne hover:text-champagne"
              >
                <InstagramIcon width={18} height={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-light">
              {t.footer.sections.navigation}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navSections.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="transition-colors duration-400 hover:text-champagne">
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-light">
              {t.footer.sections.legal}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/legal/aviso-legal" className="transition-colors duration-400 hover:text-champagne">
                  {t.footer.legalLinks.notice}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="transition-colors duration-400 hover:text-champagne">
                  {t.footer.legalLinks.privacy}
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="transition-colors duration-400 hover:text-champagne">
                  {t.footer.legalLinks.cookies}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-light">
              {t.footer.sections.contact}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-champagne" />
                <a href={siteConfig.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
                  {siteConfig.address.full}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-champagne" />
                <a href={siteConfig.phoneHref} className="hover:text-champagne">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-champagne" />
                <span>{siteConfig.schedule[0].day}: {siteConfig.schedule[0].hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. {t.footer.rights}
          </p>
          <p>Sabadell · Barcelona · Cataluña</p>
        </div>
      </Container>
    </footer>
  );
}
