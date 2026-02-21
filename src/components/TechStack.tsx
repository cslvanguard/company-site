"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "MySQL", "Firebase", "AppWrite", "Python",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden border-y border-brand-100/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <AnimatedSection className="text-center">
          <p className="font-display text-sm font-semibold text-midnight-900/30 uppercase tracking-widest">
            Technologies We Trust
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-surface-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-surface-50 to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {[...technologies, ...technologies, ...technologies].map(
            (tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-display font-semibold text-2xl text-midnight-900/10 hover:text-brand-500/40 transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}