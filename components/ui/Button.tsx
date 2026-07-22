import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-sm sm:text-base font-medium tracking-wide transition-all duration-400 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne";

const variants = {
  primary: "bg-champagne text-carbon hover:bg-champagne-light shadow-lg shadow-champagne/20",
  outline: "border border-cream/40 text-cream hover:bg-cream/10",
  dark: "bg-carbon text-cream hover:bg-carbon-light",
};

type CommonProps = {
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} className={clsx(base, variants[variant], className)} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
