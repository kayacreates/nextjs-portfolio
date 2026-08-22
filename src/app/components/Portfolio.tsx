"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Globe,
  Monitor,
  Wrench,
  Server,
} from "lucide-react";

import ContactForm from "./ContactForm";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  accent: string;
  image: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  accomplishments: string[];
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Rivera Roofing",
    subtitle: "Custom WordPress redesign from Figma concept to reusable blocks",
    role: "WordPress Developer & Design Partner",
    tags: ["WordPress", "Gutenberg", "React", "Tailwind CSS v4"],
    challenge:
      "Translate a fresh visual direction into a website that feels polished for customers but stays simple for the client to update after launch.",
    solution:
      "Built a headless custom WordPress theme with Tailwind tooling, then converted the Figma AI direction into reusable Gutenberg components instead of hard-coding one-off page layouts.",
    results: [
      "Reusable editor-friendly page sections",
      "Responsive design system carried from Figma into WordPress",
      "Modern local development and production-ready asset workflow",
    ],
    accent: "#5767E8",
    image: "/images/projects/rivera.avif",
  },
  {
    id: 2,
    title: "Compass Health",
    subtitle: "Enterprise navigation for a content-heavy WordPress experience",
    role: "WordPress Developer - Jordan Crown",
    tags: ["WordPress", "PHP", "JavaScript", "Navigation", "Responsive UI"],
    challenge:
      "A large information architecture needed a navigation experience that could expose deep content clearly across desktop and mobile without becoming difficult for editors to manage.",
    solution:
      "Implemented a custom enterprise megamenu with WordPress-native content management, responsive interaction patterns, and frontend behavior tailored to a complex site hierarchy.",
    results: [
      "Scalable navigation for complex content structures",
      "Editor-managed menu content inside WordPress",
      "Responsive behavior across desktop and mobile",
    ],
    accent: "#5C8E7A",
    image: "/images/projects/compasshealth.jpg",
  },
  {
    id: 3,
    title: "Basemap",
    subtitle: "Responsive Marketing Website for a Product Rebrand",
    role: "WordPress Developer — Fresh Consulting",
    tags: ["ACF", "Sage8", "PHP", "jQuery", "SCSS"],
    challenge:
      "Deliver a fully responsive, custom WordPress marketing website for Basemap's rebrand within an aggressive three-week timeline as the sole developer.",
    solution:
      "Developed a custom WordPress theme with 10–12 responsive templates, delivering the project one week early as the sole developer and receiving the Developer of the Month Award.",
    results: [
      "Faster delivery without sacrificing build quality",
      "Consistent responsive experience across 10–12 page templates",
      "Streamlined theme structure for easier maintenance",
    ],
    accent: "#8B5CF6",
    image: "/images/projects/basemap.webp",
  },
];

const skillGroups = [
  {
    label: "WordPress",
    Icon: Globe,
    skills: [
      "Custom Themes",
      "Gutenberg Blocks",
      "ACF",
      "WooCommerce",
      "WP-CLI",
      "WP_Query",
      "Elementor",
    ],
  },
  {
    label: "Frontend",
    Icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "jQuery",
      "JavaScript",
      "HTML",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & Data",
    Icon: Server,
    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "PostgreSQL",
      "Payload CMS",
      "WordPress APIs",
      "Search & Filter",
    ],
  },
  {
    label: "Workflow",
    Icon: Wrench,
    skills: [
      "Figma",
      "Vite",
      "Git",
      "Bitbucket",
      "WP Engine",
      "Sourcetree",
      "npm",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand the audience, content, business goal, and what the client needs to manage.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Turn visual direction into a responsive system of reusable sections and components.",
  },
  {
    number: "03",
    title: "Develop",
    desc: "Build clean WordPress architecture with modern frontend tooling and editor-friendly controls.",
  },
  {
    number: "04",
    title: "Optimize",
    desc: "Refine responsive behavior, performance, accessibility, and the editing experience.",
  },
  {
    number: "05",
    title: "Launch",
    desc: "Staged deployment, thorough QA, team training, post-launch support.",
  },
];

const experiences: ExperienceItem[] = [
  {
    company: "Selected Client Work",
    role: "Frontend & WordPress Developer",
    period: "5+ years",
    accomplishments: [
      "Built custom Gutenberg blocks with React for fully custom WordPress themes",
      "Worked within an object-oriented WordPress framework and reusable component architecture",
      "Translated design files into responsive frontend experiences with editor-friendly controls",
      "Collaborated across design and development to ship client work efficiently",
    ],
  },
  {
    company: "Idaho National Lab",
    role: "WordPress Developer",
    period: "Recent",
    accomplishments: [
      "Migrated legacy SharePoint sites into responsive, accessible WordPress experiences",
      "Implemented and reviewed frontend experiences against WCAG accessibility standards",
      "Established reusable accessibility review practices with the development team",
      "Translated requirements from scientists and researchers into production-ready WordPress solutions",
    ],
  },
  {
    company: "Jordan Crown",
    role: "WordPress Developer",
    period: "Previous",
    accomplishments: [
      "Built an enterprise megamenu for Compass Health and maintained complex WordPress content structures",
      "Contributed frontend work across projects including RIDE, Canyon Data, and New Mobility",
      "Worked with eCommerce platforms including WooCommerce and Salesforce Commerce Cloud / Demandware",
      "Troubleshot and repaired production WordPress and WooCommerce functionality for client sites",
    ],
  },
  {
    company: "Fresh Consulting",
    role: "WordPress Developer",
    period: "Past",
    accomplishments: [
      "Developed custom themes and ACF-driven WordPress experiences for client projects",
      "Delivered project work ahead of schedule and was recognized internally for development performance",
      "Improved frontend performance through image optimization and targeted refactoring",
      "Worked across PHP, JavaScript, SCSS, reusable templates, and CMS integrations",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I care about the editor experience as much as the frontend. A custom site should stay easy to manage after the developer hands it over.",
    name: "Design + CMS",
    role: "Principle",
    company: "01",
    initial: "01",
  },
  {
    quote:
      "I prefer reusable systems over one-off fixes — components, blocks, templates, and patterns that make the next page easier to build.",
    name: "Build for reuse",
    role: "Principle",
    company: "02",
    initial: "02",
  },
  {
    quote:
      "Visual polish matters, but so do performance, responsive behavior, accessibility, and code that another developer can understand.",
    name: "Details matter",
    role: "Principle",
    company: "03",
    initial: "03",
  },
];

// ─── Shared Components ────────────────────────────────────────────────────────

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium tracking-[0.12em] uppercase mb-6 ${
        light
          ? "border-white/20 text-white/50"
          : "border-border text-muted-foreground"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${light ? "bg-white/40" : "bg-accent"}`}
      />
      {children}
    </div>
  );
}

function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Blob({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    />
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-xl tracking-tight text-foreground"
        >
          KK<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200 text-base"
          >
            {dark ? "☀" : "☾"}
          </button> */}
          <a
            href="#contact"
            className="px-5 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-80 transition-opacity duration-200"
          >
            {"Let's talk"}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 pt-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-muted-foreground hover:text-foreground border-b border-border last:border-0 font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => setDark(!dark)}
              className="text-sm text-muted-foreground font-medium"
            >
              {dark ? "Light mode" : "Dark mode"}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="ml-auto px-5 py-2 bg-foreground text-background text-sm font-medium rounded-full"
            >
              {"Let's talk"}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  const headingWords = [
    { text: "Building", accent: false },
    { text: "thoughtful", accent: false },
    { text: "WordPress", accent: true },
    { text: "experiences.", accent: false },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient blobs */}
      <Blob className="w-[700px] h-[700px] bg-accent/25 top-[-15%] right-[-15%] animate-[blob_9s_ease-in-out_infinite_alternate]" />
      <Blob className="w-[500px] h-[500px] bg-violet-400/20 bottom-[5%] left-[-8%] animate-[blob_11s_ease-in-out_infinite_alternate_2s]" />
      <Blob className="w-[350px] h-[350px] bg-emerald-300/20 top-[45%] right-[18%] animate-[blob_13s_ease-in-out_infinite_alternate_4s]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-12 tracking-[0.1em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          WordPress developer with a designer’s eye
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-[-0.02em] leading-[1.07] mb-7"
        >
          {headingWords.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className={`inline-block mr-[0.22em] last:mr-0 ${
                w.accent ? "text-accent" : "text-foreground"
              }`}
            >
              {w.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.7] mb-12"
        >
          I build custom WordPress experiences that balance thoughtful design,
          clean frontend development, and an editing experience clients can
          actually use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-85 transition-all duration-200 text-sm"
          >
            View Projects
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-border rounded-full text-foreground hover:bg-secondary transition-all duration-200 font-medium text-sm"
          >
            About Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────────

function Work() {
  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">
          Featured projects
        </h2>
        <p className="text-muted-foreground mb-20 max-w-lg leading-relaxed">
          A few examples of how I turn design requirements and complex content
          needs into maintainable WordPress experiences.
        </p>

      <div className="space-y-28">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      {/* Image */}
      <div className={reverse ? "md:order-2" : "md:order-1"}>
        <div className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3]">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            style={{
              background: `radial-gradient(circle at 72% 28%, ${project.accent}55, transparent 34%), linear-gradient(135deg, ${project.accent}18, transparent 48%)`,
            }}
          />
          <div className="absolute inset-6 md:inset-8 rounded-xl border border-foreground/10 bg-background/75 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="h-10 border-b border-border flex items-center px-4 gap-1.5">
              <span className="w-2 h-2 rounded-full bg-foreground/15" />
              <span className="w-2 h-2 rounded-full bg-foreground/15" />
              <span className="w-2 h-2 rounded-full bg-foreground/15" />
              <span className="ml-auto text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                Case study
              </span>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} website`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-5 md:p-7 h-[calc(100%-2.5rem)] flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {project.subtitle}
                </div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xs">
                  {project.title}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg border border-border bg-card/70 px-2 py-3 text-[10px] text-muted-foreground text-center"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Corner tag */}
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
            0{project.id} / 03
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? "md:order-1" : "md:order-2"}>
        <div className="text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground mb-3">
          {project.role}
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-1.5">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-5 mb-8 p-5 rounded-xl bg-secondary/60 border border-border">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
              Challenge
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              {project.challenge}
            </p>
          </div>
          <div className="h-px bg-border" />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
              Solution
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {project.results.map((r) => (
            <div key={r} className="flex items-center gap-2.5 text-sm">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.accent }}
              />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 xl:gap-20 items-start">
          {/* Left */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <SectionLabel>About</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-8 leading-[1.1]">
                Bridging design and engineering.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-muted">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <Blob className="w-72 h-72 bg-accent/30 top-[5%] right-[-15%]" />
                <Blob className="w-56 h-56 bg-emerald-300/20 bottom-[8%] left-[-20%]" />
                <div className="absolute inset-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>WordPress × Design</span>
                    <span>Edmonds, WA</span>
                  </div>
                  <div>
                    <div className="text-[6rem] sm:text-[7rem] md:text-[8rem] font-semibold tracking-[-0.08em] leading-none text-foreground">
                      KK
                    </div>
                    <div className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
                      Visual arts background. Frontend mindset. Seven-plus years
                      turning design into maintainable web experiences.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="md:col-span-7 md:pt-14">
            <ScrollReveal delay={0.1}>
              <blockquote className="text-xl md:text-2xl font-medium leading-[1.55] mb-10 text-foreground border-l-2 border-accent pl-6 italic">
                &ldquo;The best WordPress builds feel intentional on both sides
                — polished for visitors and intuitive for the people editing
                them.&rdquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-[1.75] mb-5 text-[0.95rem]">
                I’m a WordPress developer with 10+ years of experience building
                custom themes, Gutenberg blocks, responsive interfaces, and
                CMS-driven experiences. My visual arts background shapes how I
                think about hierarchy, spacing, interaction, and the small
                details that make a site feel finished.
              </p>
              <p className="text-muted-foreground leading-[1.75] mb-12 text-[0.95rem]">
                I like working in the space between design and engineering:
                translating Figma into reusable components, solving tricky
                WordPress architecture problems, and making sure the final site
                performs well without becoming painful for editors to manage.
              </p>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-0">
                {[
                  {
                    year: "Today",
                    label: "WordPress + Frontend Development",
                    sub: "Custom builds, performance, and modern component workflows",
                  },
                  {
                    year: "Recent",
                    label: "WordPress Developer",
                    sub: "Idaho National Lab",
                  },
                  {
                    year: "Previously",
                    label: "WordPress Developer",
                    sub: "Jordan Crown",
                  },
                  {
                    year: "Past",
                    label: "WordPress Developer",
                    sub: "Fresh Consulting",
                  },
                  {
                    year: "Foundation",
                    label: "Visual Arts + Development Bootcamp",
                    sub: "Design training translated into frontend craft",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start py-5 border-b border-border last:border-0 group"
                  >
                    <span className="text-xs text-muted-foreground w-28 flex-shrink-0 pt-0.5 font-medium">
                      {item.year}
                    </span>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-4">
          Skills & technologies
        </h2>
        <p className="text-muted-foreground mb-16 max-w-lg leading-relaxed">
          A practical toolkit built around custom WordPress development, modern
          frontend work, and design-to-code collaboration.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, gi) => {
          const { Icon } = group;
          return (
            <ScrollReveal key={group.label} delay={gi * 0.09}>
              <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-accent/20 transition-all duration-300 group h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-lg bg-secondary text-muted-foreground border border-border font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel light>How I work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-20">
            My process
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.09}>
              <div className="relative">
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(10%+0.75rem)] w-[calc(100%-1.5rem)] h-px bg-white/10" />
                )}
                <div className="inline-block text-5xl font-light text-white/15 mb-5 tracking-[-0.03em] leading-none">
                  {step.number}
                </div>
                <div className="font-semibold text-lg mb-2 text-white">
                  {step.title}
                </div>
                <p className="text-sm text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <SectionLabel>Career</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-20">
          Experience
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-1 bottom-0 w-px bg-border md:left-[200px]" />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 relative">
                {/* Period */}
                <div className="md:text-right pt-1 pr-2">
                  <div className="text-sm text-muted-foreground font-medium">
                    {exp.period}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute md:left-[195px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm" />

                {/* Content */}
                <div className="md:pl-12">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-1.5">
                    {exp.company}
                  </div>
                  <h3 className="text-xl font-semibold mb-5 tracking-tight">
                    {exp.role}
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.accomplishments.map((acc, ai) => (
                      <li
                        key={ai}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-2" />
                        {acc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Approach</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] mb-16">
            What I bring to a build
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-accent/20 transition-all duration-300 h-full flex flex-col">
                {/* Quote mark */}
                {/* <div className="mb-5 text-accent/40">
                  <svg
                    width="28"
                    height="20"
                    viewBox="0 0 28 20"
                    fill="currentColor"
                  >
                    <path d="M0 20V11.667C0 5.278 3.889.972 11.667.028L12.5 1.806C9.583 2.639 7.361 4.028 5.833 5.972c-1.528 1.944-2.083 4-1.666 6.167H7V20H0zm14 0V11.667C14 5.278 17.889.972 25.667.028L26.5 1.806c-2.917.833-5.139 2.222-6.667 4.166-1.528 1.944-2.083 4-1.666 6.167H21V20h-7z" />
                  </svg>
                </div> */}
                <p className="text-foreground/75 leading-relaxed mb-8 flex-1 text-sm">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm font-semibold flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <Blob className="w-[700px] h-[700px] bg-accent/20 bottom-[-25%] left-[5%] animate-[blob_10s_ease-in-out_infinite_alternate]" />
      <Blob className="w-[450px] h-[450px] bg-violet-400/15 top-[-10%] right-[0%] animate-[blob_12s_ease-in-out_infinite_alternate_3s]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-[-0.025em] mb-5 leading-[1.05]">
            {"Let's build something"}
            <br />
            <span className="text-accent">together.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-20 max-w-lg leading-relaxed">
            Whether you have a project in mind or simply want to say hello —
            {"I'd"} love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20">
          {/* Contact CTA */}
          <ScrollReveal delay={0.1}>
            <div className="p-7 md:p-8 rounded-2xl border border-border bg-card">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-4">
                Connect with me
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                What can I help you with?
              </h3>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Contact links */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Prefer a direct line? Reach out through any of these channels.
              </p>
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "kayakimcreates@gmail.com",
                  href: "mailto:kayakimcreates@gmail.com",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/kayakim",
                  href: "https://www.linkedin.com/in/kayakim/",
                },
                {
                  Icon: Github,
                  label: "GitHub",
                  value: "github.com/kayacreates",
                  href: "https://github.com/kayacreates",
                },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em]">
                      {label}
                    </div>
                    <div className="text-sm font-medium group-hover:text-accent transition-colors duration-200">
                      {value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-muted-foreground/50 group-hover:text-accent transition-colors"
                  />
                </a>
              ))}

              {/* Availability card */}
              <div className="mt-8 p-5 rounded-xl bg-accent/5 border border-accent/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">
                    Currently available
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I'm open to new freelance projects and full-time
                  opportunities. Typical response time is under 24 hours.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-semibold text-xl tracking-tight">
          KK<span className="text-accent">.</span>
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yearim Kim. Designed & developed with
          care.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/kayacreates"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/kayakim/"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:kayakimcreates@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <style>{`
        @keyframes blob {
          0%   { transform: scale(1) translate(0px, 0px); }
          33%  { transform: scale(1.08) translate(18px, -18px); }
          66%  { transform: scale(0.95) translate(-12px, 14px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(128,128,128,0.3); border-radius: 3px; }
        ::selection { background: rgba(87,103,232,0.18); }
      `}</style>

      <Nav dark={dark} setDark={setDark} />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Process />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
