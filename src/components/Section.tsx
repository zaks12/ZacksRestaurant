import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({ children, className = "", containerClassName = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} mb-12 lg:mb-16`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <span className={`h-px w-8 ${light ? "bg-gold-400/40" : "bg-gold-500/40"}`} />
          <p
            className={`text-[11px] font-sans font-medium uppercase tracking-[0.3em] ${
              light ? "text-gold-400" : "text-gold-600"
            }`}
          >
            {eyebrow}
          </p>
          {center && <span className={`h-px w-8 ${light ? "bg-gold-400/40" : "bg-gold-500/40"}`} />}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-[1.12] text-balance ${
          light ? "text-ivory-50" : "text-charcoal-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg font-sans leading-relaxed text-pretty ${
            light ? "text-ivory-200/70" : "text-charcoal-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
