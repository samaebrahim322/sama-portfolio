import { Briefcase, Download, ExternalLink, GraduationCap, MapPin, Award, Code2, LayoutTemplate, ShoppingBag, Wrench, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, EXPERIENCE, SKILLS } from "@/lib/portfolio-data";
import { Chip, Reveal, SectionHeading } from "./shared";
import { GithubIcon } from "./icons";
import { toast } from "sonner";
// import { CONTACT } from "@/assets/Sama_Ibrahim_goda.pdf"

const wrap = "mx-auto max-w-7xl px-5 md:px-8";

export function About() {
  const info = [
    ["Name", "Sama Ibrahim"], ["Job Title", "Front-End Developer"], ["Location", "Cairo, Egypt"],
    ["Degree", "Computer Science"], ["University", "Menoufia University"], ["Graduation Year", "2024"], ["Professional Training", "ITI Graduate"],
  ];
  return (
    <section id="about" className="py-24 md:py-32">
      <div className={wrap}>
        <SectionHeading eyebrow="Who I am" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 leading-relaxed text-muted-foreground md:text-lg">
            <p>I'm <span className="text-foreground">Sama Ibrahim</span>, a Front-End Developer with a Computer Science background and professional training from the Information Technology Institute (ITI).</p>
            <p>I graduated from the Faculty of Computers and Information at Menoufia University in 2024, and completed the UI/UX Development Program at ITI, Cairo University.</p>
            <p>I have professional experience working with companies in Saudi Arabia and Egypt, contributing to website development, e-commerce stores, WordPress projects, and custom-coded web applications.</p>
            <p>My experience combines front-end development, WordPress customization, JavaScript, CSS, and modern web technologies such as React and Next.js.</p>
            <p>I enjoy building responsive, functional, and user-friendly digital experiences while continuously improving my technical skills.</p>
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-3xl p-6 md:p-8">
            <dl className="divide-y divide-border">
              {info.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            {CONTACT.cv ? (
              <Button asChild variant="hero" size="xl" className="mt-6 w-full"><a href={CONTACT.cv} download><Download /> Download CV</a></Button>
            ) : (
              <Button variant="hero" size="xl" className="mt-6 w-full" onClick={() => toast("CV coming soon", { description: `Meanwhile, reach me at ${CONTACT.email}` })}><Download /> Download CV</Button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/40 py-24 md:py-32">
      <div className={wrap}>
        <SectionHeading eyebrow="Career" title="Professional Experience" intro="Companies I've worked with across Saudi Arabia and Egypt." />
        <ol className="relative space-y-8 border-l border-border pl-6 md:pl-10">
          {EXPERIENCE.map((e, i) => (
            <li key={e.company} className="relative">
              <span className="absolute top-7 -left-[31px] flex size-4 items-center justify-center rounded-full bg-gradient-primary shadow-glow md:-left-[47px]" />
              <Reveal delay={i * 0.05} className="glass rounded-3xl p-6 transition-colors hover:border-primary/40 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-2xl font-bold"><Briefcase className="size-5 text-primary-glow" />{e.company}</h3>
                    <p className="mt-1 font-medium text-primary-glow">{e.role}</p>
                    {e.location && <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-3.5" />{e.location}</p>}
                  </div>
                  <Chip className="text-foreground">{e.period}</Chip>
                </div>
                <p className="mt-5 leading-relaxed text-muted-foreground">{e.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm"><Check className="size-4 shrink-0 text-primary-glow" />{p}</li>)}
                </ul>
                {e.url && <a href={e.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary-glow hover:underline">{new URL(e.url).hostname} <ExternalLink className="size-3.5" /></a>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className={wrap}>
        <SectionHeading eyebrow="Learning" title="Education & Training" />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-primary p-px shadow-glow">
            <div className="h-full rounded-[calc(1.5rem-1px)] bg-card p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-primary"><Award className="size-6" /></span>
                <Chip className="border-primary/40 text-primary-glow">ITI Graduate</Chip>
              </div>
              <h3 className="mt-6 text-2xl font-bold">Information Technology Institute (ITI)</h3>
              <p className="mt-2 font-medium text-primary-glow">UI/UX Development Program</p>
              <p className="mt-3 text-muted-foreground">Information Technology Institute (ITI), Cairo University</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="glass rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary ring-1 ring-border"><GraduationCap className="size-6 text-primary-glow" /></span>
              <Chip>Class of 2024</Chip>
            </div>
            <h3 className="mt-6 text-2xl font-bold">Menoufia University</h3>
            <p className="mt-2 font-medium text-primary-glow">Faculty of Computers and Information</p>
            <p className="mt-3 text-muted-foreground">Computer Science · Grade: Very Good</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const skillIcons = [Code2, LayoutTemplate, ShoppingBag, Wrench];
export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40 py-24 md:py-32">
      <div className={wrap}>
        <SectionHeading eyebrow="Toolkit" title="Technical Skills" intro="Technologies and platforms I use to build for the web." />
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((g, i) => {
            const Icon = skillIcons[i];
            return (
              <Reveal key={g.title} delay={i * 0.05} className="glass rounded-3xl p-7">
                <h3 className="flex items-center gap-3 text-lg font-semibold"><span className="flex size-10 items-center justify-center rounded-xl bg-secondary ring-1 ring-border"><Icon className="size-5 text-primary-glow" /></span>{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s}><Chip className="px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary-glow">{s}</Chip></li>)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GithubSection() {
  return (
    <section className="py-12">
      <div className={wrap}>
        <Reveal className="glass relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="bg-glow pointer-events-none absolute inset-0" />
          <div className="relative flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary ring-1 ring-border"><GithubIcon className="size-7" /></span>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Explore My Code</h2>
              <p className="mt-1 text-muted-foreground">Explore my GitHub profile to see my coding projects, repositories, and development journey.</p>
            </div>
          </div>
          <Button asChild variant="hero" size="xl" className="relative"><a href={CONTACT.github} target="_blank" rel="noreferrer"><GithubIcon /> View GitHub Profile</a></Button>
        </Reveal>
      </div>
    </section>
  );
}
