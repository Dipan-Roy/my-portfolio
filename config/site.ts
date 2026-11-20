export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export type SocialCard = {
  pronouns?: string;
  handle: string;
  bio: string;
  stats?: string[];
  bannerText: string;
  bannerGradient: string;
};

export const site = {
  name: "Dipan Roy Choudhury",
  url: "https://dipan-portfolio.vercel.app",
  profileImages: ["/profile.jpg", "/profile2.png"],
  bannerImage: "/banner.jpg",
  socialBannerImage: "/social-banner.jpg",
  initials: "DRC",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer.",
    "GenAI Developer.",
    "Backend Engineer.",
    "Problem Solver.",
  ],
  location: "Kolkata, India",
  timezone: "Asia/Kolkata",
  email: "roydipan05@gmail.com",
  greeting: "Hey, I'm Dipan",
  tagline:
    "Engineering the web, one idea at a time.\nI build modern, scalable web applications and AI-powered solutions that solve real-world problems.",
  about: [
    "Hey, I'm Dipan, a full-stack developer and Information Technology graduate based in Kolkata. I build modern web applications with React, Next.js, Node.js, and Express, from designing REST APIs and database structures to crafting intuitive, responsive user interfaces.",
    "My journey has been shaped by hands-on projects, freelance development, and internship experience, turning ideas into functional, end-to-end applications. Lately, I've been building Generative AI applications that transform natural-language input into practical, intelligent solutions.",
    "I value clean code, thoughtful architecture, and solutions built with purpose. I'm continuously strengthening my backend system design, software architecture, and DSA skills, and I'm always curious, always learning, and always looking for the next interesting problem to solve.",
  ],
  tldr: [
    "Building full-stack web applications.",
    "Developing GenAI-powered products.",
    "Learning backend system design and software architecture.",
    "Focused on clean, maintainable code.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: ["Backend system design", "Software architecture", "DSA"] as string[],
    nowBuilding: "GenAI applications",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/Dipan-Roy",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/dipanroychoudhury",
    email: "mailto:roydipan05@gmail.com",
    resume: "/resume.pdf",
    discord: "",
    medium: "",
  },
  socialCards: {
    github: {
      handle: "@Dipan-Roy",
      bio: "Full-stack developer building web applications with React, Next.js, Node.js, and Express. Exploring GenAI.",
      stats: ["3+ Projects", "MERN Stack"],
      bannerText: "learn • build • ship",
      bannerGradient: "from-neutral-900 to-neutral-800",
    },
    linkedin: {
      handle: "in/dipanroychoudhury",
      bio: "Full Stack Developer experienced in React, Next.js, Node.js, and scalable REST APIs.",
      stats: ["Open to Work", "Kolkata, India"],
      bannerText: "network • build • impact",
      bannerGradient: "from-blue-900 to-blue-800",
    },
    email: {
      handle: "roydipan05@gmail.com",
      bio: "Available for full-time roles, internships, and freelance full-stack projects.",
      stats: ["Fast Response", "Direct Email"],
      bannerText: "collab • contact • direct",
      bannerGradient: "from-rose-900 to-orange-900",
    },
    resume: {
      handle: "Curriculum Vitae",
      bio: "Full-stack developer experienced in React, Next.js, Node.js, and scalable REST APIs.",
      stats: ["PDF Format", "1-Page Resume"],
      bannerText: "skills • experience • cv",
      bannerGradient: "from-teal-900 to-emerald-900",
    },
  } as Record<string, SocialCard>,
  secretWords: ["dipan", "roy"],
  experience: [
    {
      company: "InAmigos Foundation",
      role: "Full Stack Development Intern",
      period: "Sep 2026 — Oct 2026",
      blurb:
        "Built an AI-assisted multi-section NGO website, evaluated usability and information architecture, and designed feature concepts for donations, volunteering, and campaigns in Figma.",
      url: "",
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2025 — Present",
      blurb:
        "Delivering full-stack web applications end to end, from API design and scalable backends with Node.js, Express, and PostgreSQL to polished React and Next.js frontends.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "AI Interview Agent",
      blurb:
        "An AI-powered mock interview platform that analyzes spoken responses and generates personalized feedback on answer quality, relevance, confidence, and overall performance.",
      story:
        "Implemented resume-based question generation for tailored, round-specific interviews, plus a performance dashboard with interview history and downloadable PDF reports using jsPDF.\n\nIntegrated Firebase Google OAuth, JWT-based authentication, and protected REST APIs, along with Razorpay-powered credit purchases and interview attempt tracking.",
      stack: [
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JWT",
        "Razorpay",
      ],
      year: "Dec 2025",
      links: {
        live: "https://interview-agent-project.onrender.com",
        source: "https://github.com/Dipan-Roy/interview-agent",
      },
      featured: true,
      image: "/projects/ai-interview-agent.webp",
      categories: ["Fullstack"],
    },
    {
      title: "Website Builder",
      blurb:
        "A website builder that turns natural-language prompts into working website code through a conversational, credit-based workflow.",
      story:
        "Integrated the OpenRouter API to transform natural-language prompts into website code through conversational input.\n\nImplemented credit-based usage and payments with Stripe Checkout and webhooks, Firebase Google OAuth, JWT authentication, and protected REST API endpoints.\n\nBuilt a website management workflow with MongoDB models for users and generated sites, supporting website storage, credit tracking, and one-click deployment to live URLs.",
      stack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "OpenRouter API",
        "Stripe",
      ],
      year: "Mar 2026",
      links: {
        live: "https://websitebuilder-frontend-1hgd.onrender.com",
        source: "https://github.com/Dipan-Roy/websiteBuilder",
      },
      featured: true,
      image: "/projects/website-builder.webp",
      categories: ["Fullstack"],
    },
    {
      title: "Exam Notes Generator",
      blurb:
        "A study platform that turns any topic into structured exam notes, revision summaries, and visual learning materials using the Google Gemini API.",
      story:
        "Implemented Firebase Google OAuth, JWT-protected REST APIs, and MongoDB persistence for generated notes, user history, and credit tracking.\n\nBuilt a credit-based payment workflow with Stripe Checkout, plus APIs for note generation, personalized history, and downloadable PDF study materials.",
      stack: [
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini API",
        "Firebase",
        "Stripe",
      ],
      year: "Sep 2026",
      links: {
        live: "https://examnotesai-a329.onrender.com",
        source: "https://github.com/Dipan-Roy/ExamNotesAI",
      },
      featured: false,
      image: "/projects/exam-notes-generator.webp",
      categories: ["Fullstack"],
    },
  ] as Project[],
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Redux Toolkit",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Mongoose",
    "Drizzle ORM",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Vercel",
    "Render",
  ],
  writing: [] as Post[],
  github: {
    username: "Dipan-Roy",
    contributionsLastYear: "—",
  },
  footerNote: "Built with ❤️ and hardwork",
} as const;

export type Site = typeof site;
