import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, GithubSection, Skills } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Sama Ibrahim | Front-End Developer | React, Next.js & WordPress";
const description = "Explore Sama Ibrahim's portfolio, a Front-End Developer and ITI graduate experienced in WordPress, Next.js, e-commerce development, and responsive web development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Sama Ibrahim" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" />
    </>
  );
}
