import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary-glow uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground md:text-lg">{intro}</p>}
    </Reveal>
  );
}

export function ImagePlaceholder({ className, label = "Image coming soon" }: { className?: string; label?: string }) {
  return (
    <div className={cn("placeholder-surface flex items-center justify-center rounded-xl", className)} role="img" aria-label={label}>
      <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
        <ImageIcon className="size-7" strokeWidth={1.25} />
        <span className="text-[11px] tracking-widest uppercase">{label}</span>
      </div>
    </div>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground", className)}>
      {children}
    </span>
  );
}
