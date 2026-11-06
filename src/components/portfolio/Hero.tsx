import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";
import photo from "@/assets/samaimg.png";

const socials = [
  { href: CONTACT.github, label: "GitHub", Icon: GithubIcon },
  { href: CONTACT.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${CONTACT.email}`, label: "Email", Icon: Mail },
];

export function Hero() {
  const reduce = useReducedMotion();
  const float = (d: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration: 6, repeat: Infinity, delay: d, ease: "easeInOut" as const },
        };
  const fade = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 * i },
  });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Open to New Opportunities
          </motion.div>
          <motion.p
            {...fade(1)}
            className="text-sm font-semibold tracking-[0.3em] text-muted-foreground"
          >
            HELLO, I'M
          </motion.p>
          <motion.h1
            {...fade(2)}
            className="mt-3 text-5xl leading-[1.02] font-extrabold sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">Sama Ibrahim</span>
          </motion.h1>
          <motion.p
            {...fade(3)}
            className="mt-4 text-2xl font-semibold md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Front-End Developer
          </motion.p>
          <motion.p {...fade(4)} className="mt-2 font-mono text-sm text-primary-glow">
            WordPress | Next.js | React | JavaScript
          </motion.p>
          <motion.p
            {...fade(5)}
            className="mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg"
          >
            I'm a Front-End Developer and ITI graduate with professional experience building
            responsive websites, e-commerce stores, and modern web interfaces. I specialize in
            WordPress development, front-end customization, JavaScript, and custom-coded websites
            using Next.js.
          </motion.p>
          <motion.div {...fade(6)} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                Explore My Projects <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          <motion.ul {...fade(7)} className="mt-8 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex size-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary-glow"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-3xl" />
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2"
          >
            <img
              src={photo}
              alt="Sama Ibrahim, Front-End Developer"
              className="size-full rounded-[1.6rem] object-cover object-[50%_45%]"
            />
          </motion.div>
          <motion.div
            {...float(0)}
            className="glass absolute -top-5 -left-4 rounded-2xl px-4 py-3 font-mono text-xs md:-left-10"
          >
            <span className="text-primary-glow">const</span> dev ={" "}
            <span className="text-success">"Sama"</span>;
          </motion.div>
          <motion.div
            {...float(1.5)}
            className="glass absolute top-1/2 -right-3 rounded-2xl px-4 py-3 font-mono text-xs md:-right-10"
          >
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary-glow">Next.js</span>{" "}
            <span className="text-muted-foreground">/&gt;</span>
          </motion.div>
          <motion.div
            {...float(3)}
            className="glass absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-primary font-mono text-xs font-bold">
              WP
            </span>
            <div className="text-xs">
              <p className="font-semibold">Front-End Developer & WordPress </p>
              <p className="text-muted-foreground">React · Next Js · WooCommerce</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
