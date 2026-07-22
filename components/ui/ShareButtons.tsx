"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-carbon/15 text-carbon/70 transition-colors duration-400 hover:border-champagne-dark hover:text-champagne-dark"
      >
        <FacebookIcon width={18} height={18} />
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir por WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-carbon/15 text-carbon/70 transition-colors duration-400 hover:border-champagne-dark hover:text-champagne-dark"
      >
        <WhatsAppIcon width={18} height={18} />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar enlace"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-carbon/15 text-carbon/70 transition-colors duration-400 hover:border-champagne-dark hover:text-champagne-dark"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}
