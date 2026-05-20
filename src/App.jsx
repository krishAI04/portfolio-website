import React, { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Download,
  Github,
  Layers3,
  Mail,
  Map,
  Menu,
  MessageSquareText,
  Phone,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const currentSkills = {
  Frontend: ["React", "HTML", "Tailwind CSS", "JavaScript", "Expo"],
  Backend: ["Django", "Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MySQL", "SQLite"],
  "Tools & APIs": ["Postman", "GitHub", "OSRM", "Nominatim", "OpenStreetMap"]
};

const learningSkills = ["Angular", "TypeScript", "Next.js", "PostgreSQL", "Docker", "OpenAI / LangChain"];

const projects = [
  {
    title: "Shecure",
    label: "Hackathon Winner",
    icon: ShieldCheck,
    visual: "image",
    image: "/shecure-route.png",
    stack: ["React", "Node.js", "Express", "MongoDB", "OSRM"],
    description:
      "Women-safety route planner that ranks route alternatives with custom weighted safety scoring, highlights risky stretches, and supports feedback, complaints, SOS reports, and authentication.",
    links: [
      { label: "Live Demo", href: "https://women-safety-d0vd.onrender.com", primary: true },
      { label: "View GitHub", href: "https://github.com/krishAI04" }
    ]
  },
  {
    title: "Smart Grievance",
    label: "BIST Hackathon",
    icon: MessageSquareText,
    visual: "image",
    image: "/smart-grievance-preview.svg",
    stack: ["Django", "React", "MongoDB", "REST APIs"],
    description:
      "Grievance platform with complaint submission, tracking workflows, and backend/frontend integration around a teammate-built AI model.",
    links: [
      { label: "Live Demo", href: "https://sahayak-ai-1-ejua.onrender.com", primary: true },
      { label: "View GitHub", href: "https://github.com/krishAI04" }
    ]
  },
  {
    title: "AQI Route",
    label: "Route Planning",
    icon: Route,
    visual: "image",
    image: "/aqi-route-map.svg",
    stack: ["Django", "Tailwind", "JavaScript", "Expo"],
    description:
      "AQI-aware route planner with place search, route alternatives, and shortest / best AQI / second-best AQI comparisons, plus an Expo mobile demo with live location.",
    links: [
      { label: "Live Demo", href: "https://aqi-route-final.onrender.com", primary: true },
      { label: "View GitHub", href: "https://github.com/krishAI04" }
    ]
  },
  {
    title: "Assetra",
    label: "Solo Build",
    icon: Layers3,
    visual: "image",
    image: "/assetra-preview.svg",
    stack: ["Django", "Templates", "SQLite"],
    description:
      "End-to-end solo full-stack project covering backend logic, template-based frontend, database design, and core product workflows.",
    links: [
      { label: "Live Demo", href: "https://assetra-cc39.onrender.com", primary: true },
      { label: "View GitHub", href: "https://github.com/krishAI04" }
    ]
  },
  {
    title: "The Deven",
    label: "Client App",
    icon: Code2,
    visual: "image",
    image: "/deven-preview.svg",
    stack: ["MongoDB", "Express", "React", "Node"],
    description:
      "MERN blog application built for a client, strengthening practical Node.js, MongoDB, React, and client delivery experience.",
    links: [{ label: "View GitHub", href: "https://github.com/krishAI04" }]
  }
];

const workflow = [
  ["01", "Problem", "Identify the pain point, target users, and minimum useful workflow."],
  ["02", "Schema", "Map the data, relationships, and API shape before building screens."],
  ["03", "Backend", "Create endpoints, validation, storage, and the logic that powers the app."],
  ["04", "Frontend", "Turn backend behavior into clear interfaces with React or templates."],
  ["05", "Integrate", "Connect APIs, maps, mobile demos, and third-party services carefully."],
  ["06", "Validate", "Test flows, edge cases, and whether the product still feels usable."]
];

const timeline = [
  {
    time: "2024 - Present",
    title: "Full-stack project ownership",
    body: "Built Assetra, AQI Route, Shecure, Smart Grievance, and The Deven across Django, React, Node.js, MongoDB, SQLite, APIs, and mobile demos."
  },
  {
    time: "Hackathons",
    title: "Fast adaptation under pressure",
    body: "Won a college hackathon with Shecure and participated at BIST College Bhopal with Smart Grievance."
  },
  {
    time: "Freelance",
    title: "Client and creator workflows",
    body: "Worked through Upwork on YouTube/content operations, scriptwriting, production support, and client communication."
  }
];

const roles = ["usable products.", "route APIs.", "Django backends.", "MERN applications.", "new stacks quickly."];

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 }
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09
    }
  }
};

const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function useTypewriter(items) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setSubIndex(items[0].length);
      return undefined;
    }

    const current = items[index];
    const doneTyping = !deleting && subIndex === current.length;
    const doneDeleting = deleting && subIndex === 0;
    const delay = doneTyping ? 1500 : deleting ? 42 : 78;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setIndex((currentIndex) => (currentIndex + 1) % items.length);
        return;
      }
      setSubIndex((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, index, items, reduceMotion, subIndex]);

  return items[index].slice(0, subIndex);
}

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-pad container-page scroll-mt-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.2, 1, 0.3, 1] }}
    >
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="label-caps mb-3 text-primary-strong">{eyebrow}</p>}
          {title && <h2 className="font-display text-3xl font-semibold text-on-surface md:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const close = () => setOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a className="font-display text-lg font-bold tracking-tight text-on-surface focus-ring" href="#home" onClick={close}>
          Krish Yadav
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                className={`label-caps border-b-2 pb-1 transition ${
                  isActive ? "border-primary-strong text-primary-strong" : "border-transparent text-on-surface-variant hover:text-primary"
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 font-code text-xs font-semibold uppercase tracking-[0.08em] text-on-primary shadow-glow transition hover:opacity-90 sm:inline-flex"
            href="/Krish_Yadav_CV.pdf"
            download
          >
            <Download size={16} />
            Resume
          </a>
          <button
            className="focus-ring inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-on-surface md:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-background/95 px-gutter py-4 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="label-caps rounded-lg px-3 py-2 text-on-surface-variant transition hover:bg-white/5 hover:text-primary"
                  href={item.href}
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-code text-xs font-semibold uppercase tracking-[0.08em] text-on-primary"
                href="/Krish_Yadav_CV.pdf"
                download
                onClick={close}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -34]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 4]);

  return (
    <motion.div style={{ y, rotate }} className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-8 rounded-full border border-primary-strong/20" />
      <div className="absolute inset-16 rounded-full border border-secondary/20" />
      <motion.div
        className="glass-card top-light relative h-full overflow-hidden rounded-2xl p-5"
        animate={reduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-strong/15 via-transparent to-secondary/10" />
        <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-4">
          <div className="glass-card rounded-xl p-4">
            <Map className="mb-8 text-primary-strong" size={28} />
            <div className="h-2 rounded-full bg-primary-strong/20">
              <div className="h-full w-2/3 rounded-full bg-primary-strong" />
            </div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <Database className="mb-8 text-secondary" size={28} />
            <p className="truncate font-code text-xs text-on-surface-variant">db.routes.find()</p>
          </div>
          <div className="glass-card col-span-2 rounded-xl p-4">
            <div className="mb-4 flex items-center justify-between">
              <ServerCog className="text-primary-strong" size={24} />
              <span className="font-code text-xs text-secondary">POST 200 OK</span>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-3/4 rounded bg-outline-variant" />
              <div className="h-1.5 w-1/2 rounded bg-outline-variant" />
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-strong/30 bg-background shadow-glow">
          <BrainCircuit className="text-primary-strong" size={42} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="container-page flex min-h-screen scroll-mt-24 flex-col items-center gap-14 pt-32 md:flex-row md:pt-24">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.2, 1, 0.3, 1] }}
      >
        <p className="label-caps mb-5 text-primary-strong">React / Django / Node / MongoDB</p>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-on-surface md:text-6xl">
          Full Stack Developer with a <span className="text-primary">Backend-Focused Mindset</span>
        </h1>
        <p className="mt-5 h-8 font-code text-lg text-on-surface-variant">
          I build <span className="text-primary-strong">{typed}</span>
          <span className="ml-1 inline-block h-5 border-r-2 border-primary-strong align-[-3px]" />
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-outline md:text-lg">
          I turn project ideas into working full-stack products: APIs, databases, maps, mobile demos, and React interfaces.
          I am especially strong at learning new stacks quickly and shipping usable flows from messy requirements.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-on-primary shadow-glow transition hover:opacity-90"
            href="#projects"
          >
            View Projects
            <ArrowUpRight size={18} />
          </a>
          <a
            className="glass-card glass-card-hover focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-sm font-semibold text-on-surface"
            href="#contact"
          >
            Let's Connect
            <Mail size={18} />
          </a>
        </div>
      </motion.div>
      <div className="flex-1">
        <HeroVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A practical builder with an adaptable stack.">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
          <p>
            I am currently pursuing B.Tech CSE at Jagran Lakecity University, Bhopal. My work is shaped by building real projects:
            route planners, grievance systems, client apps, and full-stack dashboards.
          </p>
          <p>
            I like the middle ground between backend logic and frontend experience. A good project, to me, is not just a nice screen;
            it is a flow where APIs, data, validation, and UI all make sense together.
          </p>
        </div>
        <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          {[
            ["Full Stack", "Building complete flows from database to interface.", Layers3, "text-primary-strong"],
            ["Backend First", "Prioritizing data shape, APIs, and reliable logic.", ServerCog, "text-secondary"],
            ["Fast Learner", "Comfortable adapting to new tools when the product needs it.", Sparkles, "text-tertiary"]
          ].map(([title, body, Icon, color], index) => (
            <motion.div
              key={title}
              className={`glass-card glass-card-hover top-light rounded-xl p-5 ${index === 2 ? "sm:col-span-2" : ""}`}
              variants={staggerChild}
            >
              <Icon className={`mb-4 ${color}`} size={28} />
              <h3 className="mb-2 font-display text-xl font-semibold text-on-surface">{title}</h3>
              <p className="leading-7 text-outline">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The technical arsenal, kept honest.">
      <motion.div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(currentSkills).map(([group, skills], index) => {
          const icons = [Code2, ServerCog, Database, Map];
          const Icon = icons[index] || Code2;
          return (
            <motion.div key={group} className="glass-card glass-card-hover top-light rounded-2xl p-6 text-center" variants={staggerChild}>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary-strong/30 bg-primary-strong/10">
                <Icon className="text-primary-strong" size={30} />
              </div>
              <h3 className="mb-5 font-display text-xl font-semibold text-on-surface">{group}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="neon-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="glass-card top-light mt-6 rounded-2xl p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label-caps mb-2 text-secondary">Learning / exploring</p>
            <p className="max-w-2xl text-on-surface-variant">
              These are technologies I am actively open to learning or applying next, including the Angular/TypeScript direction BOLD uses.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {learningSkills.map((skill) => (
              <span key={skill} className="rounded border border-secondary/30 bg-secondary/10 px-2.5 py-1 font-code text-xs text-secondary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Workflow() {
  return (
    <Section eyebrow="Workflow" title="From abstract problem to working product.">
      <motion.div className="relative grid gap-4 md:grid-cols-3" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full bg-primary-strong/15 md:block" />
        {workflow.map(([number, title, body]) => (
          <motion.div key={number} className="glass-card glass-card-hover top-light relative rounded-xl p-5 text-center" variants={staggerChild}>
            <div className="mb-2 font-code text-2xl font-semibold text-primary-strong">{number}</div>
            <h3 className="mb-2 font-display text-xl font-semibold text-on-surface">{title}</h3>
            <p className="leading-7 text-outline">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function ProjectPreview({ project }) {
  if (project.visual === "image") {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_28%_20%,rgba(56,189,248,0.16),transparent_18rem),linear-gradient(135deg,rgba(10,15,18,0.96),rgba(5,8,22,1))] p-4 sm:p-5">
        <img
          className="max-h-full max-w-full rounded-xl border border-white/10 object-contain shadow-glow-soft transition duration-700 group-hover:scale-[1.025]"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.24),transparent_18rem),linear-gradient(135deg,rgba(15,20,24,1),rgba(5,8,22,1))] p-6">
      <div className="w-full max-w-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-code text-xs text-primary-strong">{project.label}</span>
          <project.icon className="text-secondary" size={26} />
        </div>
        {project.visual === "route" && (
          <div className="relative h-32 rounded-xl border border-primary-strong/20 bg-white/[0.03]">
            <div className="absolute left-7 top-8 h-16 w-48 rounded-full border-2 border-primary-strong/70 border-l-transparent border-t-transparent" />
            <div className="absolute bottom-7 right-10 h-3 w-3 rounded-full bg-secondary shadow-glow" />
            <div className="absolute left-9 top-7 h-3 w-3 rounded-full bg-primary-strong shadow-glow" />
          </div>
        )}
        {project.visual === "grievance" && (
          <div className="space-y-2 rounded-xl border border-primary-strong/20 bg-white/[0.03] p-4">
            <div className="h-2 w-4/5 rounded bg-primary-strong/40" />
            <div className="h-2 w-3/5 rounded bg-secondary/40" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded bg-primary-strong/15" />
              <div className="h-12 rounded bg-secondary/15" />
              <div className="h-12 rounded bg-tertiary/15" />
            </div>
          </div>
        )}
        {project.visual === "assetra" && (
          <div className="rounded-xl border border-primary-strong/20 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-end gap-2">
              {[48, 80, 56, 104, 70].map((height) => (
                <div key={height} className="w-full rounded-t bg-primary-strong/40" style={{ height }} />
              ))}
            </div>
            <div className="h-2 w-2/3 rounded bg-outline-variant" />
          </div>
        )}
        {project.visual === "blog" && (
          <div className="rounded-xl border border-primary-strong/20 bg-white/[0.03] p-4">
            <div className="mb-3 h-4 w-2/3 rounded bg-primary-strong/35" />
            <div className="space-y-2">
              <div className="h-2 rounded bg-outline-variant" />
              <div className="h-2 w-5/6 rounded bg-outline-variant" />
              <div className="h-2 w-3/5 rounded bg-outline-variant" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected works with real product shape.">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <p className="max-w-2xl text-on-surface-variant">
          These projects show the range I want to keep building on: backend logic, maps, API integrations, mobile demos, and client-ready applications.
        </p>
        <a className="label-caps inline-flex items-center gap-2 text-primary-strong hover:underline" href="https://github.com/krishAI04" target="_blank" rel="noreferrer">
          See all on GitHub
          <ArrowUpRight size={16} />
        </a>
      </div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`glass-card glass-card-hover group overflow-hidden rounded-2xl ${index === 0 ? "md:col-span-2" : ""}`}
            variants={staggerChild}
          >
            <div className={`grid ${index === 0 ? "md:grid-cols-[1.05fr_0.95fr]" : ""}`}>
              <div className={`relative overflow-hidden ${index === 0 ? "min-h-72 md:h-full md:min-h-[420px]" : "h-72"}`}>
                <ProjectPreview project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-75" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="label-caps mb-2 text-primary-strong">{project.label}</p>
                    <h3 className="font-display text-2xl font-semibold text-on-surface">{project.title}</h3>
                  </div>
                  <project.icon className="shrink-0 text-primary-strong" size={26} />
                </div>
                <p className="mb-5 leading-7 text-on-surface-variant">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="neon-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      className={`focus-ring inline-flex items-center gap-2 rounded-lg px-4 py-2 font-code text-xs font-semibold uppercase tracking-[0.08em] transition ${
                        link.primary
                          ? "bg-primary text-on-primary shadow-glow hover:opacity-90"
                          : "border border-secondary/30 bg-secondary/10 text-secondary hover:border-primary/50 hover:text-primary"
                      }`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      key={link.label}
                    >
                      {link.label}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function Mindset() {
  return (
    <Section eyebrow="Mindset" title="How I want the work to feel.">
      <motion.div className="grid gap-5 md:grid-cols-3" variants={staggerParent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="glass-card glass-card-hover top-light rounded-2xl p-7 md:col-span-2" variants={staggerChild}>
          <h3 className="mb-3 font-display text-2xl font-semibold text-primary-strong">Product ownership</h3>
          <p className="text-lg leading-8 text-outline">
            I like owning the path from first idea to working demo: understanding the user, shaping data, writing endpoints,
            wiring screens, and checking whether the result actually solves the problem.
          </p>
        </motion.div>
        <motion.div className="glass-card glass-card-hover top-light rounded-2xl p-7 text-center" variants={staggerChild}>
          <ServerCog className="mx-auto mb-4 text-secondary" size={44} />
          <h3 className="font-display text-xl font-semibold text-on-surface">Backend clarity</h3>
        </motion.div>
        <motion.div className="glass-card glass-card-hover top-light rounded-2xl p-7 text-center" variants={staggerChild}>
          <Sparkles className="mx-auto mb-4 text-tertiary" size={44} />
          <h3 className="font-display text-xl font-semibold text-on-surface">Adaptability</h3>
        </motion.div>
        <motion.div className="glass-card glass-card-hover top-light rounded-2xl p-7 md:col-span-2" variants={staggerChild}>
          <h3 className="mb-3 font-display text-2xl font-semibold text-secondary">Agency and creator context</h3>
          <p className="text-lg leading-8 text-outline">
            My freelance content work gives me a practical feel for client communication, YouTube workflows, deadlines, and
            how social-media teams think about output, quality, and iteration.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="The evolution so far.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px border-l border-dashed border-primary-strong/25 md:left-1/2" />
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:last-child]:col-start-1 md:[&>*:last-child]:row-start-1" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                <span className="label-caps text-outline">{item.time}</span>
              </div>
              <div className="absolute left-2.5 top-1 h-4 w-4 rounded-full border-4 border-background bg-primary-strong shadow-glow md:left-1/2 md:-translate-x-1/2" />
              <div className={`glass-card glass-card-hover top-light rounded-xl p-5 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                <h3 className="mb-2 font-display text-xl font-semibold text-primary-strong">{item.title}</h3>
                <p className="leading-7 text-outline">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    return `mailto:krish39yadav@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <Section id="contact" eyebrow="Contact" title="Initiate contact.">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-lg leading-8 text-on-surface-variant">
            Interested in a collaboration, internship conversation, or project discussion? My inbox is open.
          </p>
          {[
            [Mail, "Email", "krish39yadav@gmail.com", "mailto:krish39yadav@gmail.com", "text-primary-strong"],
            [Phone, "Phone", "+91 9039208734", "tel:+919039208734", "text-secondary"],
            [Github, "GitHub", "github.com/krishAI04", "https://github.com/krishAI04", "text-tertiary"],
            [ArrowUpRight, "LinkedIn", "linkedin.com/in/krish-yadav-65a519277", "https://www.linkedin.com/in/krish-yadav-65a519277", "text-primary"]
          ].map(([Icon, label, value, href, color]) => (
            <a key={label} className="glass-card glass-card-hover flex items-center gap-4 rounded-xl p-4" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon className={color} size={24} />
              <span>
                <span className="label-caps block text-outline">{label}</span>
                <span className="break-all text-on-surface">{value}</span>
              </span>
            </a>
          ))}
        </div>
        <form
          className="glass-card top-light rounded-2xl p-6"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = mailHref;
          }}
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="label-caps mb-2 block text-outline">Full name</span>
              <input
                className="focus-ring w-full rounded-lg border border-white/10 bg-surface-card px-4 py-3 text-on-surface"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
              />
            </label>
            <label className="block">
              <span className="label-caps mb-2 block text-outline">Email address</span>
              <input
                className="focus-ring w-full rounded-lg border border-white/10 bg-surface-card px-4 py-3 text-on-surface"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
              />
            </label>
            <label className="block">
              <span className="label-caps mb-2 block text-outline">Message</span>
              <textarea
                className="focus-ring min-h-36 w-full resize-y rounded-lg border border-white/10 bg-surface-card px-4 py-3 text-on-surface"
                placeholder="How can I help?"
                value={form.message}
                onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
              />
            </label>
            <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-on-primary shadow-glow transition hover:opacity-90" type="submit">
              Send Message
              <Mail size={18} />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="container-page flex flex-col items-center justify-between gap-5 border-t border-white/10 py-10 text-center md:flex-row md:text-left">
      <div>
        <p className="font-display text-xl font-semibold text-on-surface">Krish Yadav</p>
        <p className="text-on-surface-variant">Full Stack Developer | Bhopal, India</p>
      </div>
      <p className="text-sm text-outline">Built with React, Tailwind CSS, and Framer Motion.</p>
      <div className="flex gap-4">
        <a className="label-caps text-on-surface-variant transition hover:text-primary" href="https://github.com/krishAI04" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="label-caps text-on-surface-variant transition hover:text-primary" href="https://www.linkedin.com/in/krish-yadav-65a519277" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="label-caps text-on-surface-variant transition hover:text-primary" href="mailto:krish39yadav@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen text-on-surface">
      <motion.div className="fixed left-0 top-0 z-[60] h-1 origin-left bg-primary-strong" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <Mindset />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
