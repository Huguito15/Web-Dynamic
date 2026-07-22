import { Reveal } from "./Reveal";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", light }: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <span
          className={clsx(
            "font-sans text-xs sm:text-sm uppercase tracking-[0.25em]",
            light ? "text-champagne-light" : "text-champagne-dark"
          )}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            "mt-4 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight",
            light ? "text-cream" : "text-carbon"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "mt-5 text-base sm:text-lg leading-relaxed",
              light ? "text-cream/80" : "text-carbon/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
