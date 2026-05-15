import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 sm:gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted sm:text-xs">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-border-strong" aria-hidden />
        <span>{eyebrow}</span>
      </div>

      {/* Title — 모바일 3xl → 데스크톱 5xl 단계적 증가 */}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
