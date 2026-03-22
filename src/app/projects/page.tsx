"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { ArrowUpRight, Globe, Wrench, Shield, Eye } from "lucide-react";

const categories = [
  "All",
  "Custom Websites",
  "Fix & Improve",
  "Components",
  "Security",
  "Marketing",
  "Hosting",
  "IT & Support",
];

// const projects = [
//   {
//     title: "TechBridge Solutions",
//     category: ["Custom Websites"],
//     description:
//       "A complete SaaS platform with dashboard, billing, and user management. Built from scratch with Next.js and a modern design system.",
//     tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//     color: "from-violet-400 to-indigo-500",
//     icon: Globe,
//     stats: { metric: "+40%", label: "Conversion Rate" },
//   },
//   {
//     title: "GreenLeaf E-Commerce",
//     category: ["Custom Websites"],
//     description:
//       "A full-featured online marketplace for organic products with real-time inventory, payment processing, and admin dashboard.",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     color: "from-emerald-400 to-teal-500",
//     icon: Globe,
//     stats: { metric: "2.1s", label: "Avg. Load Time" },
//   },
//   {
//     title: "NovaCorp Rebrand",
//     category: ["Fix & Improve"],
//     description:
//       "Complete redesign and performance overhaul of a legacy corporate site. Reduced load time by 70% and modernized the entire codebase.",
//     tags: ["Performance", "Redesign", "SEO", "A11y"],
//     color: "from-blue-400 to-cyan-500",
//     icon: Wrench,
//     stats: { metric: "-70%", label: "Load Time" },
//   },
//   {
//     title: "FinServ Security Audit",
//     category: ["Security"],
//     description:
//       "Comprehensive security audit for a financial services platform. Identified and patched 23 vulnerabilities, implemented WAF and 2FA.",
//     tags: ["Penetration Testing", "WAF", "2FA", "OWASP"],
//     color: "from-red-400 to-rose-500",
//     icon: Shield,
//     stats: { metric: "23", label: "Vulns Patched" },
//   },
//   {
//     title: "Artisan UI Kit",
//     category: ["Components"],
//     description:
//       "A custom design system with 40+ accessible, themeable components. Built for a design agency to use across all client projects.",
//     tags: ["React", "Storybook", "A11y", "Figma"],
//     color: "from-purple-400 to-fuchsia-500",
//     icon: Puzzle,
//     stats: { metric: "40+", label: "Components" },
//   },
//   {
//     title: "Bloom Digital Campaign",
//     category: ["Marketing"],
//     description:
//       "Full-stack digital marketing campaign including SEO overhaul, PPC management, and social media strategy for a beauty brand.",
//     tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
//     color: "from-amber-400 to-orange-500",
//     icon: Megaphone,
//     stats: { metric: "3x", label: "Traffic Growth" },
//   },
//   {
//     title: "DataVault Hosting Migration",
//     category: ["Hosting"],
//     description:
//       "Migrated a high-traffic platform from shared hosting to a scalable cloud infrastructure. Zero downtime, 99.99% uptime since.",
//     tags: ["AWS", "Docker", "CI/CD", "Monitoring"],
//     color: "from-pink-400 to-rose-500",
//     icon: Server,
//     stats: { metric: "99.99%", label: "Uptime" },
//   },
//   {
//     title: "MedConnect Portal",
//     category: ["Custom Websites"],
//     description:
//       "A HIPAA-compliant patient portal with appointment scheduling, secure messaging, and telehealth integration.",
//     tags: ["Next.js", "HIPAA", "WebRTC", "PostgreSQL"],
//     color: "from-sky-400 to-blue-500",
//     icon: Globe,
//     stats: { metric: "15k+", label: "Active Users" },
//   },
// ];

const projects = [
  {
    title: "Sajana W Portfolio",
    category: ["Custom Websites", "Hosting"],
    description:
      "A fully custom personal portfolio built to showcase engineering work, projects, and writing. Designed with a clean UI, fast performance, and a modern tech stack.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    color: "from-violet-400 to-indigo-500",
    icon: Globe,
    stats: { metric: "100%", label: "Custom Built" },
    link: "https://sajanaw.com/",
  },
  {
    title: "Lijith W Portfolio",
    category: ["Custom Websites", "Hosting"],
    description:
      "A personalized portfolio website built for the co‑founder, focused on simplicity, clarity, and professional presentation. Includes responsive design and optimized performance.",
    tags: ["Next.js", "React", "Tailwind", "Vercel"],
    color: "from-emerald-400 to-teal-500",
    icon: Globe,
    stats: { metric: "100%", label: "Custom Built" },
    link: "https://lijithw.com/",
  },
  {
    title: "Mead Memorial Chapel",
    category: ["Custom Websites", "Hosting"],
    description:
      "A public‑facing platform providing unbiased updates on the ongoing legal dispute between the colleges and the chapel. Includes a blog, petition signup, document archive, and historical background.",
    tags: ["Next.js", "CMS", "SEO", "Accessibility"],
    color: "from-blue-400 to-cyan-500",
    icon: Globe,
    stats: { metric: "1k+", label: "Monthly Visitors" },
    link: "https://meadmemorialchapel.net/",
  },
  {
    title: "Hyannis Rotary Redesign",
    category: ["Fix & Improve"],
    description:
      "Complete redesign and modernization of the Rotary Club’s website. Improved UI, optimized workflows, enhanced security, and supported marketing and outreach initiatives.",
    tags: ["Redesign", "Security", "UX", "Policy Writing"],
    color: "from-red-400 to-rose-500",
    icon: Wrench,
    stats: { metric: "70%", label: "Efficiency Boost" },
    link: "https://hyannisrotary.org/",
  },
  {
    title: "Centerville Historical Museum",
    category: ["IT & Support"],
    description:
      "Provided cost‑efficient IT solutions for a local nonprofit, including hardware restoration, printer/scanner reconfiguration, and resolving a payment plugin failure to restore online transactions.",
    tags: ["IT Support", "Troubleshooting", "Legacy Systems", "Payments"],
    color: "from-purple-400 to-fuchsia-500",
    icon: Shield,
    stats: { metric: "100%", label: "Systems Restored" },
    link: "https://www.centervillehistoricalmuseum.org/",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-badge mb-6 inline-flex">Our Work</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Projects that <span className="gradient-text">speak volumes</span>
            </h1>
            <p className="text-xl text-midnight-900/50 leading-relaxed">
              Every project is a story of collaboration, innovation, and
              measurable results. Here&apos;s a glimpse of what we&apos;ve
              built.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-display text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-600 text-white shadow-glow"
                      : "bg-white text-midnight-900/50 border border-brand-100 hover:border-brand-300 hover:text-brand-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-2xl overflow-hidden h-full group"
                  >
                    {/* Project visual header */}
                    <div
                      className={`relative h-48 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                    >
                      <div className="absolute inset-0 grid-pattern opacity-20" />
                      <project.icon className="w-16 h-16 text-white/30" />

                      {/* Stat overlay */}
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 text-white">
                        <div className="font-display font-bold text-xl">
                          {project.stats.metric}
                        </div>
                        <div className="text-xs text-white/70">
                          {project.stats.label}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-display font-semibold text-brand-500 uppercase tracking-wider">
                          {project.category.join(" & ")}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-midnight-900/50 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono bg-surface-100 text-midnight-900/50 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-600 group-hover:gap-3 hover:cursor-pointer transition-all duration-300">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}