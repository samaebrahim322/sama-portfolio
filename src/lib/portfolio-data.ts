export const CONTACT = {
  email: "samagoda322@gmail.com",
  phone: "+20 112 859 0822",
  phoneHref: "tel:+201128590822",
  location: "Cairo, Egypt",
  github: "https://github.com/samaebrahim322",
  linkedin: "https://www.linkedin.com/in/sama-ebrahim-7627851b7/",
  // Replace with your CV file path (e.g. "/sama-ibrahim-cv.pdf" placed in public/) when ready.
  cv: "",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    company: "Media Artessa",
    role: "WordPress Developer / Front-End Developer",
    period: "September 2026 – Present",
    url: "https://mediaartessa.com/",
    description:
      "Working on WordPress websites and front-end development, building and customizing websites, implementing responsive interfaces, and contributing to website development and maintenance.",
    points: ["WordPress Development", "Elementor", "Front-End Development", "CSS", "JavaScript", "Responsive Websites", "Website Customization"],
  },
  {
    company: "Plana",
    role: "WordPress Developer / Front-End Developer",
    period: "November 2025 – Present",
    url: "https://plana365.com/",
    description:
      "Working on WordPress website development and front-end implementation, contributing to website customization, responsive layouts, and improving website functionality and user experience.",
    points: ["WordPress Development", "Elementor", "Front-End Development", "Responsive Design Implementation", "Website Customization", "CSS and JavaScript when applicable"],
  },
  {
    company: "ADFAZ",
    role: "Front-End Developer / E-commerce Developer",
    period: "August 2025 – October 2026",
    location: "Saudi Arabia — Remote",
    description:
      "Worked with a Saudi e-commerce company, developing and customizing online stores and web interfaces. My responsibilities included front-end development, CSS and JavaScript customization, and working with e-commerce platforms such as Salla, Zid, and WordPress.",
    points: ["Front-End Development", "CSS and JavaScript customization", "E-commerce store development", "Salla and Zid customization", "Responsive website implementation", "Website improvements and maintenance"],
  },
];

export const SKILLS = [
  { title: "Front-End Development", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "Responsive Web Design"] },
  { title: "WordPress & CMS", items: ["WordPress", "Elementor", "WooCommerce", "WordPress Customization"] },
  { title: "E-commerce Platforms", items: ["Salla", "Zid", "Shopify"] },
  { title: "Tools & Development", items: ["Git", "GitHub", "VS Code", "Postman", "Docker"] },
];

export type Project = {
  name: string;
  url: string;
  category: string;
  description?: string;
  tech?: string[];
  role?: string;
  featured?: boolean;
};

const host = (u: string) => new URL(u).hostname.replace(/^www\./, "");

export const PROJECTS: Project[] = [
  {
    name: "Bandar Holdings",
    url: "https://bandarholdings.com/",
    category: "Custom-Coded",
    featured: true,
    description:
      "Worked on the Front-End development of a custom-coded corporate website using Next.js, contributing to responsive web interfaces and modern website implementation.",
    tech: ["Next.js", "React", "Front-End Development"],
    role: "Front-End Developer",
  },
  ...[
    ["King Billiard Cafe", "https://kingbillardcafe.de/"],
    ["Badr Store", "https://badrstoreeg.com/"],
    ["Loop Express", "https://loopexpress.ae/"],
    ["Sanrux", "https://sanrux.com/"],
    ["ARBS", "https://arbs.alshahmuae.com/"],
    ["Osus Rawad Al Emar", "https://osusrawaedalemar.com/"],
    ["Maro", "https://maro.orascompco.com/"],
    ["Orascom Company", "https://orascompco.com/"],
    ["Al Shahm UAE", "https://alshahmuae.com/"],
    ["Plana365", "https://plana365.com/"],
    ["Bonbon", "https://bonbonc.com/"],
    ["Alyakoot Trading", "https://alyakoottrading.alshahmuae.com/"],
    ["Royal Bloome Events", "https://royalbloome.events/"],
  ].map(([name, url]) => ({ name, url, category: "Website" })),
];

export const projectHost = host;
