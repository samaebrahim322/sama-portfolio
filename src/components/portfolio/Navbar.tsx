import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/sama-logo.png.asset.json";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent")}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 md:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2" aria-label="Sama Ibrahim — home">
          <img src={logo.url} alt="Sama Ibrahim logo" className="size-10 object-contain" width={40} height={40} />
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={cn("relative rounded-full px-4 py-2 text-sm transition-colors", active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {active === n.id && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-secondary ring-1 ring-border" />}
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden sm:inline-flex"><a href="#contact">Let's Work Together</a></Button>
          <Button variant="glass" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("block rounded-xl px-4 py-3 text-base", active === n.id ? "bg-secondary text-foreground" : "text-muted-foreground")}>{n.label}</a>
                </li>
              ))}
              <li className="pt-2"><Button asChild variant="hero" size="xl" className="w-full"><a href="#contact" onClick={() => setOpen(false)}>Let's Work Together</a></Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
