"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";

import {
  Heart,
  Target,
  Lightbulb,
  Users,
  Rocket,

} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Craft Over Speed",
    description:
      "We believe in doing things right. Every project gets our full attention, because rushing leads to mediocrity.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "Beautiful design is great, but it means nothing without measurable impact. We optimize for outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Transparent Partnership",
    description:
      "No jargon, no hidden fees, no surprises. We communicate clearly and treat every client as a partner.",
  },
  {
    icon: Users,
    title: "Client-First Always",
    description:
      "Your success is our success. We go above and beyond because we genuinely care about the businesses we serve.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "The Spark",
    description:
      "Two brothers with a shared passion for technology decided to turn late-night coding sessions into something bigger.",
  },
  {
    year: "2023",
    title: "First Clients",
    description:
      "Landed our first major projects. Word spread quickly — quality work speaks for itself.",
  },
  {
    year: "2024",
    title: "Growing Fast",
    description:
      "Expanded our services to include security, marketing, and hosting. Crossed 30+ completed projects.",
  },
  {
    year: "2025",
    title: "The Vanguard",
    description:
      "Today, we're a trusted partner for businesses ready to lead in the digital space. And we're just getting started.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-badge mb-6 inline-flex">Our Story</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Two brothers,{" "}
              <span className="gradient-text">one mission</span>
            </h1>
            <p className="text-xl text-midnight-900/50 leading-relaxed">
              CSL Vanguard was born from a simple belief: every business
              deserves a web presence that&apos;s as ambitious as they are. We
              started in a small room with two laptops and a lot of
              determination. Today, we&apos;re building the digital future — one
              project at a time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                  How it all started
                </h2>
                <div className="space-y-4 text-midnight-900/55 leading-relaxed">
                  <p>
                    Growing up, we were always the ones our family and friends
                    turned to when something tech-related needed fixing. A
                    broken website here, an email setup there — it was second
                    nature to us. But somewhere along the way, we realized that
                    most small businesses were being left behind in the digital
                    revolution.
                  </p>
                  <p>
                    The agencies they could find were either too expensive, too
                    impersonal, or delivered cookie-cutter solutions that
                    didn&apos;t truly represent their brand. We knew there was a
                    better way — a way that combined technical excellence with
                    genuine care for each client&apos;s unique story.
                  </p>
                  <p>
                    That&apos;s how CSL Vanguard was born. The name says it all:
                    we&apos;re here to be at the forefront, leading the charge
                    for businesses that refuse to settle for average.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-br from-brand-200/20 to-brand-400/10 rounded-3xl blur-2xl" />
                <div className="relative glass-card rounded-3xl p-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-brand-500" />
                    <span className="font-display font-semibold text-brand-600">
                      Our Mission
                    </span>
                  </div>
                  <p className="text-2xl font-display font-semibold leading-snug">
                    To empower every business with world-class web solutions
                    that are accessible, impactful, and built to last.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-midnight-900/40">
                    <div className="w-8 h-px bg-brand-300" />
                    Since 2022
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative py-24 bg-surface-100 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge mb-6 inline-flex">The Founders</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-6">
              Meet the brothers behind{" "}
              <span className="gradient-text">the vision</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              {
                name: "Founder One",
                role: "Co-Founder & Lead Developer",
                initial: "C",
                bio: "A full-stack developer with a passion for building scalable, elegant solutions. Obsessed with performance, clean code, and creating experiences that feel effortless. Leads the technical vision and architecture of every project.",
                skills: ["Full-Stack Dev", "Architecture", "DevOps"],
              },
              {
                name: "Founder Two",
                role: "Co-Founder & Creative Director",
                initial: "S",
                bio: "A designer-developer hybrid who bridges the gap between beautiful design and flawless execution. Drives the creative direction, client relationships, and ensures every project tells a compelling story.",
                skills: ["UI/UX Design", "Strategy", "Marketing"],
              },
            ].map((founder, index) => (
              <AnimatedSection key={founder.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl p-8 text-center"
                >
                  {/* Avatar placeholder */}
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand-300 to-brand-600 animate-pulse-slow" />
                    <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                      <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full bg-linear-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                        <span className="font-display font-bold text-4xl text-brand-600">
                          {founder.initial}
                        </span>
                      </div>
                    </div>
                    {/* Replace the div above with an actual image: */}
                    {/* <Image src="/images/founder-1.jpg" alt={founder.name} fill className="object-cover rounded-full" /> */}
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-brand-500 font-display text-sm font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-midnight-900/50 text-sm leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-display font-medium bg-brand-50 text-brand-600 rounded-full border border-brand-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center" delay={0.3}>
            <p className="text-sm text-midnight-900/40 italic">
              Replace the placeholder initials with actual founder photos by
              adding images to <code className="font-mono text-brand-500">/public/images/</code> and updating the component.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge mb-6 inline-flex">Our Journey</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
              Milestones that <span className="gradient-text">define us</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={milestone.year}
                delay={index * 0.1}
                direction="left"
              >
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-glow">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-linear-to-b from-brand-300 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pb-12">
                    <h3 className="font-display font-bold text-xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-midnight-900/50 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-midnight-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-dark" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-badge mb-6 inline-flex border-brand-500/20 text-brand-400 bg-brand-500/10">
              Our Values
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white">
              What drives <span className="text-brand-400">everything</span> we
              do
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="p-8 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 transition-all duration-500">
                  <value.icon className="w-8 h-8 text-brand-400 mb-4" />
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}