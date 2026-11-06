import { useState, type FormEvent } from "react";
import { ArrowUp, Loader2, Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./shared";

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

export function validateContact(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!f.name.trim()) e.name = "Please enter your full name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.subject.trim()) e.subject = "Please enter a subject.";
  if (!f.message.trim()) e.message = "Please write a message.";
  return e;
}

export function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validateContact>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateContact(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    try {
      const body = `${f.message}\n\n— ${f.name} (${f.email})`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => { setStatus("done"); setF(empty); }, 600);
    } catch {
      setStatus("error");
    }
  };

  const field = (k: keyof Fields, label: string, type = "text") => (
    <div className="space-y-2">
      <Label htmlFor={k}>{label}</Label>
      {k === "message" ? (
        <Textarea id={k} rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} className="rounded-xl bg-secondary" />
      ) : (
        <Input id={k} type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} aria-invalid={!!errors[k]} className="h-12 rounded-xl bg-secondary" />
      )}
      {errors[k] && <p className="text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  const info = [
    { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { Icon: MapPin, label: "Location", value: CONTACT.location },
    { Icon: LinkedinIcon, label: "LinkedIn", value: "sama-ebrahim", href: CONTACT.linkedin },
    { Icon: GithubIcon, label: "GitHub", value: "samaebrahim322", href: CONTACT.github },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
      <div className="bg-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary-glow uppercase">Contact</p>
          <h2 className="text-3xl font-bold md:text-5xl">Let's Build Something <span className="text-gradient">Great Together</span></h2>
          <p className="mt-4 text-muted-foreground md:text-lg">Have a project, job opportunity, or collaboration in mind? Feel free to get in touch. I'd love to hear from you.</p>
          <ul className="mt-8 space-y-3">
            {info.map(({ Icon, label, value, href }) => {
              const inner = (<><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary ring-1 ring-border"><Icon className="size-5 text-primary-glow" /></span><span><span className="block text-xs text-muted-foreground">{label}</span><span className="font-medium break-all">{value}</span></span></>);
              return <li key={label}>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-secondary">{inner}</a> : <div className="flex items-center gap-4 p-2">{inner}</div>}</li>;
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="glass space-y-5 rounded-3xl p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">{field("name", "Full Name")}{field("email", "Email Address", "email")}</div>
            {field("subject", "Subject")}
            {field("message", "Message")}
            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? <><Loader2 className="animate-spin" /> Opening your email app…</> : <><Send /> Send Message</>}
            </Button>
            <p className="text-center text-xs text-muted-foreground">This opens your email app with the message ready to send.</p>
            {status === "done" && <p role="status" className="flex items-center gap-2 rounded-xl bg-success/10 p-3 text-sm text-success"><CheckCircle2 className="size-4" /> Your email app should now be open — just press send. Thank you!</p>}
            {status === "error" && <p role="alert" className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-sm text-destructive"><AlertCircle className="size-4" /> Something went wrong. Please email {CONTACT.email} directly.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>Sama Ibrahim</p>
          <p className="text-sm text-primary-glow">Front-End Developer</p>
          <p className="mt-2 text-sm text-muted-foreground">Building responsive and modern web experiences.</p>
        </div>
        <div className="flex items-center gap-3">
          {[{ h: CONTACT.github, l: "GitHub", I: GithubIcon }, { h: CONTACT.linkedin, l: "LinkedIn", I: LinkedinIcon }, { h: `mailto:${CONTACT.email}`, l: "Email", I: Mail }].map(({ h, l, I }) => (
            <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={l} className="glass flex size-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary-glow"><I className="size-4" /></a>
          ))}
          <Button asChild variant="hero" size="icon" className="ml-2 size-10" aria-label="Back to top"><a href="#home"><ArrowUp /></a></Button>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-muted-foreground md:px-8">© 2026 Sama Ibrahim. All rights reserved.</p>
    </footer>
  );
}
