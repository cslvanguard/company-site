"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Zap,
  Palette,
  Code2,
  BarChart3,
  Clock,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Every site is optimized for Core Web Vitals. Sub-second load times are the standard, not the exception.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Palette,
    title: "Design-First Thinking",
    description: "We believe great software starts with great design. Every pixel is intentional, every interaction delightful.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "React, Next.js, TypeScript, Tailwind — we use battle-tested tools that scale with your business and make maintenance a breeze.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "We don't just build pretty sites. Every decision is backed by analytics and designed to drive measurable growth.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We set realistic timelines and stick to them. No surprises, no endless delays — just reliable execution.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "You get direct access to the founders, not a support ticket queue. We treat your project like our own.",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-6 inline-flex">Why CSL Vanguard</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Built different,{" "}
            <span className="gradient-text">delivered better</span>
          </h2>
          <p className="text-lg text-midnight-900/50 max-w-2xl mx-auto">
            We combine cutting-edge technology with meticulous craftsmanship
            to deliver results that set you apart.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rounded-2xl p-8 h-full ${feature.className}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-midnight-900/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
