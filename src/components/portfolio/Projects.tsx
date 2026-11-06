import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PROJECTS, projectHost, type Project } from "@/lib/portfolio-data";
import { Chip, ImagePlaceholder, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Custom-Coded", "Website"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduce = useReducedMotion();
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured && (filter === "All" || p.category === filter));
  const showFeatured = filter === "All" || filter === featured.category;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected work" title="Featured Projects" intro="Websites and online stores I've contributed to." />
          <div className="mb-12 flex gap-2 md:mb-16" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={cn("rounded-full px-4 py-2 text-sm transition-all", filter === f ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground")}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {showFeatured && (
          <motion.button type="button" onClick={() => setSelected(featured)} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="group glass mb-6 grid w-full gap-6 rounded-3xl p-4 text-left transition-all hover:border-primary/40 hover:shadow-glow md:grid-cols-[1.4fr_1fr] md:p-5">
            <ImagePlaceholder className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.01]" label="Project image" />
            <div className="flex flex-col justify-center p-2 md:p-4">
              <Chip className="w-fit border-primary/40 text-primary-glow">Featured · {featured.category}</Chip>
              <h3 className="mt-4 text-3xl font-bold md:text-4xl">{featured.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{featured.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{featured.tech!.map((t) => <Chip key={t}>{t}</Chip>)}</div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow">View Project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </div>
          </motion.button>
        )}

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.li key={p.name} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}>
              <div className="group glass flex h-full flex-col rounded-3xl p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <button type="button" onClick={() => setSelected(p)} className="text-left" aria-label={`View details for ${p.name}`}>
                  <ImagePlaceholder className="aspect-[16/10] w-full" label="Project image" />
                  <div className="px-2 pt-4">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{projectHost(p.url)}</p>
                  </div>
                </button>
                <div className="mt-auto flex items-center justify-between gap-2 px-2 pt-4 pb-1">
                  <button type="button" onClick={() => setSelected(p)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">View Project</button>
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary-glow hover:underline">Live Website <ArrowUpRight className="size-4" /></a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-popover sm:max-w-2xl">
          {selected && (
            <>
              <ImagePlaceholder className="aspect-video w-full" label="Project image" />
              <DialogHeader className="text-left">
                <DialogTitle className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>{selected.name}</DialogTitle>
                <DialogDescription asChild>
                  <a href={selected.url} target="_blank" rel="noreferrer" className="font-mono text-sm text-primary-glow hover:underline">{selected.url}</a>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <div><h4 className="mb-1 font-semibold">Overview</h4><p className="text-muted-foreground">{selected.description ?? `A live website I contributed to. Visit ${projectHost(selected.url)} to explore it.`}</p></div>
                {selected.role && <div><h4 className="mb-1 font-semibold">My Role</h4><p className="text-muted-foreground">{selected.role}</p></div>}
                {selected.tech && <div><h4 className="mb-2 font-semibold">Technology</h4><div className="flex flex-wrap gap-2">{selected.tech.map((t) => <Chip key={t}>{t}</Chip>)}</div></div>}
              </div>
              <Button asChild variant="hero" size="xl" className="w-full sm:w-fit"><a href={selected.url} target="_blank" rel="noreferrer">Visit Live Website <ExternalLink /></a></Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
