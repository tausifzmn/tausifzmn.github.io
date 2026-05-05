/* global */
const { useState, useEffect, useRef, useMemo } = React;

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4";

const NAV = [
  { id: "home",    label: "Home" },
  { id: "work",    label: "Work" },
  { id: "about",   label: "About" },
  { id: "resume",  label: "Resume" },
  { id: "contact", label: "Contact" },
];

/* per-page color theme */
const PAGE_THEME = {
  home:    "navy",
  work:    "moss",
  about:   "navy-sunset",
  resume:  "rust",
  contact: "navy",
};

const PROJECTS = [
  {
    id: "overwatch-tracker",
    name: "Overwatch Tracker",
    year: "2024",
    role: "Side project",
    tags: ["React", "Stats", "Visualization"],
    blurb:
      "A personal stat tracker for Overwatch — pulls match data, charts trends across heroes and roles, and surfaces the patterns that actually move SR.",
    href: "https://github.com/tausifzmn/overwatch-tracker",
    accent: "16 90% 50%",
    thumbKind: "tracker",
  },
  {
    id: "aiig",
    name: "AIIG",
    year: "2024",
    role: "AI experiment",
    tags: ["Python", "AI", "Generative"],
    blurb:
      "An AI image-generation playground exploring prompt pipelines, model swaps, and reproducible runs — built to learn the seams of generative tooling.",
    href: "https://github.com/tausifzmn/AIIG",
    accent: "270 70% 55%",
    thumbKind: "ai",
  },
  {
    id: "distributed-file-server",
    name: "Distributed File Server",
    year: "2023",
    role: "Systems project",
    tags: ["Distributed", "Networking", "Go"],
    blurb:
      "A multi-node file server with replication, consistency guarantees, and failover. The kind of project that makes you appreciate every database you'll ever use.",
    href: "https://github.com/tausifzmn/distributed-file-server",
    accent: "200 80% 45%",
    thumbKind: "nodes",
  },
  {
    id: "lasers-combat-evolved",
    name: "Lasers: Combat Evolved",
    year: "2022",
    role: "Game project",
    tags: ["Game Dev", "C#", "Unity"],
    blurb:
      "A laser-combat arcade shooter — physics, particles, and a satisfying gameplay loop. Built for the joy of making things that go pew.",
    href: "https://github.com/tausifzmn/Lasers-Combat-Evolved",
    accent: "330 80% 55%",
    thumbKind: "lasers",
  },
  {
    id: "multi-agent-platform",
    name: "Multi-Agent Automation Platform",
    year: "2025 — Now",
    role: "AI Engineer II · Dayforce",
    tags: ["LangGraph", "Playwright MCP", "ChromaDB", "Langfuse"],
    blurb:
      "Hierarchical multi-agent system where a LangGraph orchestrator dispatches 20+ specialist ReAct sub-agents discovered via ChromaDB semantic search. Self-healing execution and ag-ui-protocol streaming to React clients.",
    href: null,
    accent: "201 80% 35%",
    thumbKind: "agents",
  },
  {
    id: "test-execution-dashboard",
    name: "Test Execution Dashboard",
    year: "2025 — Now",
    role: "AI Engineer II · Dayforce",
    tags: ["React", "TypeScript", "FastAPI", "SQL Server"],
    blurb:
      "Async pipeline scheduler with atomic batch claims and cascading run-cancellation. Role-aware analytics with row-level RBAC and a shared paginated list pattern consolidating 20+ endpoints.",
    href: null,
    accent: "215 70% 40%",
    thumbKind: "dashboard",
  },
];

const STATS = [
  { value: "5+",  label: "Years building software", icon: "code"  },
  { value: "20+", label: "AI agents in production", icon: "spark" },
  { value: "22%", label: "Validation cycle reduction", icon: "box" },
];

const CONTACT = {
  email:    "tzaman.ca@gmail.com",
  phone:    "+1 (437) 429-0797",
  linkedin: "https://www.linkedin.com/in/tausifzmn/",
  github:   "https://github.com/tausifzmn",
};

const EXPERIENCE = [
  {
    time: "Sep 2025 — Now",
    place: "Dayforce · Toronto",
    title: "AI Software Engineer II",
    bullets: [
      "Engineered multi-agent LangChain automation using Playwright MCP that translates natural-language test instructions into executable workflows — cut 1,600+ hour validation cycles by 22%.",
      "Built a NL→SQL query agent across a 5,000+ table database, reducing manual report generation from 10 hours to under 3 minutes for 1,000+ annual reports.",
      "Designed a modular backend with SQLModel base-class hierarchy and versioned Alembic migrations, enabling structured schema evolution without production regressions.",
      "Closed a FastAPI authorization IDOR flaw by enforcing JWT user identity, eliminating a production security vulnerability.",
      "Reduced new-hire onboarding time by 33% with reverse-engineered legacy test setup and end-to-end documentation.",
    ],
  },
  {
    time: "Oct 2022 — Mar 2023",
    place: "ESB Technologies · Austin, TX",
    title: "Software Developer",
    bullets: [
      "Engineered FastAPI services to automate analytics workflows, increasing team throughput by 30%.",
      "Prototyped LLM-driven summarization and routing tools to accelerate internal document processing.",
      "Integrated classification models into Azure pipelines to reduce manual QA effort.",
    ],
  },
  {
    time: "Dec 2021 — Aug 2022",
    place: "Infosys Limited · Austin, TX",
    title: "Senior Systems Engineer",
    bullets: [
      "Designed Spring Boot microservices to automate high-volume backend data workflows.",
      "Led migration to Hibernate ORM; mentored engineers via training materials and code reviews.",
      "Improved service performance by 40% through SQL refactoring and HTTP endpoint restructuring.",
    ],
  },
  {
    time: "Jan 2021 — Aug 2021",
    place: "IJ Ventures · NYC",
    title: "Full-Stack Developer Intern",
    bullets: [
      "Built internal dashboards for campaign automation and real-time metrics delivery.",
      "Integrated WebSocket-driven realtime tracking across mobile and web clients.",
    ],
  },
];

const EDUCATION = [
  {
    time: "Aug 2024 — Dec 2025",
    place: "University of Windsor · Windsor, ON",
    title: "Master of Applied Computing",
  },
  {
    time: "Aug 2016 — Aug 2020",
    place: "University of Texas at Arlington",
    title: "B.S., Computer Science",
  },
];

const TOOLKIT = [
  "Python", "TypeScript", "JavaScript", "SQL", "Java", "C#",
  "LangChain", "LangGraph", "Model Context Protocol", "ChromaDB", "RAG",
  "Azure OpenAI", "Langfuse", "OpenTelemetry", "Playwright MCP",
  "FastAPI", "Spring Boot", "Node.js", "APScheduler",
  "React 19", "Redux Toolkit", "TanStack Query", "Vite", "Tailwind",
  "SQL Server", "PostgreSQL", "SQLAlchemy", "Alembic",
  "Azure", "AWS", "GCP", "Docker", "GitHub Actions",
];

/* ============================================================ */
/* Icon                                                           */
/* ============================================================ */
function Icon({ name, size = 22, stroke = "currentColor" }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke, strokeWidth: 1.5,
    strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "globe":
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></svg>);
    case "clock":
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
    case "code":
      return (<svg {...common}><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /><path d="M14 4l-4 16" /></svg>);
    case "box":
      return (<svg {...common}><path d="M21 16.5v-9a1.5 1.5 0 0 0-.79-1.32l-7.5-4.05a1.5 1.5 0 0 0-1.42 0L3.79 6.18A1.5 1.5 0 0 0 3 7.5v9a1.5 1.5 0 0 0 .79 1.32l7.5 4.05a1.5 1.5 0 0 0 1.42 0l7.5-4.05A1.5 1.5 0 0 0 21 16.5Z" /><path d="M3.27 6.96 12 12l8.73-5.04" /><path d="M12 22V12" /></svg>);
    case "spark":
      return (<svg {...common}><path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" /><path d="M5.6 5.6l2.8 2.8" /><path d="M15.6 15.6l2.8 2.8" /><path d="M5.6 18.4l2.8-2.8" /><path d="M15.6 8.4l2.8-2.8" /></svg>);
    case "mail":
      return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
    case "linkedin":
      return (<svg {...common}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-4a2 2 0 0 1 4 0v4" /><path d="M12 13v4" /></svg>);
    case "github":
      return (<svg {...common}><path d="M9 19c-4 1.5-4-2-6-2" /><path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 5.77 5.07 5.07 0 0 0 18.91 2S17.73 1.65 15 3.48a13.38 13.38 0 0 0-7 0C5.27 1.65 4.09 2 4.09 2A5.07 5.07 0 0 0 4 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 19.13V22" /></svg>);
    case "download":
      return (<svg {...common}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>);
    case "arrow":
      return (<svg {...common}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>);
    default:
      return null;
  }
}

function LetterReveal({ text, className = "", delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="letter"
          style={{
            animationDelay: `${delay + i * 0.04}s`,
            whiteSpace: ch === " " ? "pre" : "normal",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

Object.assign(window, {
  VIDEO_SRC, NAV, PAGE_THEME, PROJECTS, STATS, CONTACT,
  EXPERIENCE, EDUCATION, TOOLKIT, Icon, LetterReveal,
});
