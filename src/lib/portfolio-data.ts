// ---------------------------------------------------------------------------
// Images: Vite بيعالج الصور اللي جوه src/assets عن طريق import.meta.glob
// ---------------------------------------------------------------------------
const images = import.meta.glob("/src/assets/imgs/*.{jpeg,jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const img = (file: string): string => {
  const found = images[`/src/assets/imgs/${file}`];
  if (!found && import.meta.env.DEV) {
    console.warn(`[portfolio-data] Image not found: ${file}`);
  }
  return found ?? "";
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const CONTACT = {
  email: "samagoda322@gmail.com",
  phone: "+20 112 859 0822",
  phoneHref: "tel:+201128590822",
  location: "Cairo, Egypt",
  github: "https://github.com/samaebrahim322",
  linkedin: "https://www.linkedin.com/in/sama-ebrahim-7627851b7/",
  cv: "/Sama_Ibrahim_goda.pdf",
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const EXPERIENCE = [
  {
    company: "Media Artessa",
    role: "WordPress Developer / Front-End Developer",
    period: "September 2026 – Present",
    url: "https://mediaartessa.com/",
    description:
      "Working on WordPress websites and front-end development, building and customizing websites, implementing responsive interfaces, and contributing to website development and maintenance.",
    points: [
      "WordPress Development",
      "Elementor",
      "Front-End Development",
      "React",
      "Next.js",
      "Responsive Websites",
      "Website Customization",
    ],
  },
  {
    company: "Plana",
    role: "WordPress Developer",
    period: "November 2025 – Present",
    url: "https://plana365.com/",
    description:
      "Working on WordPress website development and front-end implementation, contributing to website customization, responsive layouts, and improving website functionality and user experience.",
    points: [
      "WordPress Development",
      "Elementor",
      "Front-End Development",
      "Responsive Design Implementation",
      "Website Customization",
      "CSS and JavaScript",
    ],
  },
  {
    company: "ADFAZ",
    role: "Web Designer",
    period: "August 2025 – October 2026",
    location: "Saudi Arabia — Remote",
    description:
      "Worked with a Saudi e-commerce company, developing and customizing online stores and web interfaces. My responsibilities included front-end development, CSS and JavaScript customization, and working with e-commerce platforms such as Salla, Zid, and WordPress.",
    points: [
      "Front-End Development",
      "CSS and JavaScript Customization",
      "E-commerce Store Development",
      "Salla and Zid Customization",
      "Responsive Website Implementation",
      "Website Improvements and Maintenance",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const SKILLS = [
  {
    title: "Front-End Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "UI/UX"
    ],
  },
  {
    title: "WordPress & CMS",
    items: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "WordPress Customization",
    ],
  },
  {
    title: "E-commerce Platforms",
    items: ["Salla", "Zid", "Shopify"],
  },
  {
    title: "Tools & Development",
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export type Project = {
  name: string;
  url: string;
  category: string;
  image: string;
  description?: string;
  tech?: string[];
  role?: string;
  featured?: boolean;
};

export const projectHost = (url: string) =>
  new URL(url).hostname.replace(/^www\./, "");

// [name, url, image file name]
const WEBSITES: [string, string, string][] = [
  ["Plana365", "https://plana365.com/", "p (2).jpeg"],
  ["Orascom Company", "https://orascompco.com/", "p (14).jpeg"],
  ["Baronholidays", "https://baronholidays.com/", "p (11).jpeg"],
  ["smartcarebugs", "https://smartcarebugs.com/", "p (18).jpeg"],
  ["Maro", "https://maro.orascompco.com/", "p (13).jpeg"],
  ["Al Shahm UAE", "https://alshahmuae.com/", "p (1).jpeg"],
  ["Osus Rawad Al Emar", "https://osusrawaedalemar.com/", "p (12).jpeg"],
  ["Loop Express", "https://loopexpress.ae/", "p (9).jpeg"],
  ["Alyakoot Trading", "https://alyakoottrading.alshahmuae.com/", "p (4).jpeg"],
  ["Royal Bloome Events", "https://royalbloome.events/", "p (5).jpeg"],
  ["Bonbon", "https://bonbonc.com/", "p (3).jpeg"],
  ["Badr Store", "https://badrstoreeg.com/", "p (8).jpeg"],
  ["Sanrux", "https://sanrux.com/", "p (10).jpeg"],
  ["King Billiard Cafe", "https://kingbillardcafe.de/", "p (7).jpeg"],
  ["Hajjaj Contracting", "https://hajjajcontracting.com/", "p (15).jpeg"],
  ["Asmat Dental Center", "https://asmatdentalcenter.ae/", "p (16).jpeg"],
  ["شذا الرمال", "https://storetwo.plana365.com/", "p (17).jpeg"],
];

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
    image: img("BandarHoldings.jpeg"),
  },
  ...WEBSITES.map(([name, url, file]) => ({
    name,
    url,
    image: img(file),
    category: "Website",
  })),
];