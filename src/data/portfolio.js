// ── Portfolio Data ──────────────────────────────────────────────

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Zyeke Gador",
  verified: true,
  location: "Ampayon, Butuan City",
  title: "Aspiring System Developer | UI/UX Design | Web Development",
  about: [
    "Information Systems graduate from Caraga State University with experience in system development, web development, UI/UX, WordPress, graphic design, and basic AI applications.",
    "Skilled in building user-friendly digital solutions, managing information systems, and supporting system analysis.",
    "Seeking an entry-level opportunity as a System Analyst, IT professional, or Graphic Designer to apply my skills and grow in the technology field.",
  ],
  beyond:
    "When I have free time, I usually engage in various activities and take time to enjoy the outside world, which helps me relax and recharge.",
  contact: {
    email: "gadorzyekeaira@gmail.com",
    phone: "09660733911",
    telegramUrl: "https://t.me/+639660733911",
  },
  social: {
    linkedin: "#",
    github: "#",
    instagram: "https://www.instagram.com/gzykair_/",
    facebook: "https://www.facebook.com/gzykair.19",
  },
};

export const education = [
  {
    degree: "BS Information Systems",
    school: "Caraga State University",
    years: "2022 – 2026",
  },
  {
    strand: "STEM",
    school: "Agusan del Sur National High School",
    years: "2021 – 2022",
    honors: "With High Honors",
  },
];

export const experience = [
  {
    title: "Office Support Staff (OJT)",
    company: "DILG – Butuan City",
    period: "February 2026 – May 2026",
    active: true,
  },
  {
    title: "Website Developer & Graphic Designer",
    company: "Amply Development",
    period: "2024 – 2025",
    active: false,
  },
  {
    title: "Audio Transcriber",
    company: "Appen China",
    period: "2021 – 2022",
    active: false,
  },
];

export const techStack = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
    "Figma",
    "Vue.js",
  ],
  backend: ["Python", "C", "MySQL", "Supabase"],
  cms: ["WordPress", "Google Analytics"],
  data: ["SQL", "Python", "Excel"],
  tools: ["Git & GitHub", "WordPress", "Google Analytics"],
};

export const projects = [
  {
    id: 1,
    title: "RBI Information Management System",
    description:
      "A secure and centralized platform for managing resident profiles, household data, and barangay records of Barangay Golden Ribbon.",
    image: `${base}projects/rbiims.jpg`,
    bgColor: "#1e40af",
    link: "zyekegador.github.io/RBIIMS/",
    caseStudy: false,
    tags: ["System Development", "Barangay Management", "Web Application"],
  },
  {
    id: 2,
    title: "RVC PetCare",
    description:
      "Mobile pet clinic application featuring pet service browsing, clinic booking, pet categorization, and user management. Complete UI/UX design with intuitive navigation and modern interface.",
    image: `${base}projects/rvcpetcare.jpg`,
    bgColor: "#FF8C42",
    link: null,
    caseStudy: true,
    tags: ["Mobile UI/UX", "Pet Services", "App Design"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Cybersecurity Framework",
    year: "2026",
    image: `${base}certificates/cert1.jpg`,
  },
  {
    id: 2,
    title: "PAGSANYOG 2025: Pre-incubation Workshop",
    year: "2025",
    image: `${base}certificates/cert2.jpg`,
  },
  {
    id: 3,
    title: "Design Prompts for Everyday Work Tasks",
    year: "2026",
    image: `${base}certificates/cert3.jpg`,
  },
  {
    id: 4,
    title: "Foundations of User Experience (UX) Design",
    year: "2026",
    image: `${base}certificates/cert4.jpg`,
  },
  {
    id: 5,
    title: "Accelerate Your Job Search with AI",
    year: "2026",
    image: `${base}certificates/cert5.jpg`,
  },
  {
    id: 6,
    title: "Start Writing Prompts like a Pro",
    year: "2026",
    image: `${base}certificates/cert6.jpg`,
  },
  {
    id: 7,
    title: "PAGSANYOG 2025: Startup Pitching and Showcase",
    year: "2025",
    image: `${base}certificates/cert7.jpg`,
  },
  {
    id: 8,
    title: "Digital Citizenship",
    year: "2025",
    image: `${base}certificates/cert8.jpg`,
  },
  {
    id: 9,
    title: "ICT Project Management",
    year: "2025",
    image: `${base}certificates/cert9.jpg`,
  },
  {
    id: 10,
    title: "Basic Level of Software Engineering",
    year: null,
    image: `${base}certificates/cert10.jpg`,
  },
  {
    id: 11,
    title: "Introduction to JavaScript",
    year: null,
    image: `${base}certificates/cert11.jpg`,
  },
  {
    id: 12,
    title: "Introduction to HTML",
    year: null,
    image: `${base}certificates/cert12.jpg`,
  },
  {
    id: 13,
    title: "Introduction to CSS",
    year: null,
    image: `${base}certificates/cert13.jpg`,
  },
];

export const recommendations = [
  {
    quote:
      "She consistently works diligently, shows strong attention to detail, and completes tasks efficiently and responsibly.",
    author: "Josephine B. - Barangay Secretary",
  },
  {
    quote:
      "She demonstrates reliability, good work ethics, and handles responsibilities with care and consistency.",
    author: "Jhunalyn Domo",
  },
];

export const beyondImages = [
  { alt: "Activity 1", image: `${base}Life/life1.jpg` },
  { alt: "Activity 2", image: `${base}Life/life2.jpg` },
  { alt: "Activity 3", image: `${base}Life/life3.jpg` },
  { alt: "Activity 4", image: `${base}Life/life4.jpg` },
  { alt: "Activity 5", image: `${base}Life/life5.JPG` },
  { alt: "Activity 6", image: `${base}Life/life6.JPG` },
  { alt: "Activity 7", image: `${base}Life/life7.JPG` },
];
