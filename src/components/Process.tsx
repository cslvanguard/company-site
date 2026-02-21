"use client";

import AnimatedSection from "./AnimatedSection";
import { MessageSquare, Layers, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We dive deep into your vision, goals, and audience. Understanding your needs is the foundation of everything we build.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design & Plan",
    description:
      "Our team crafts wireframes, prototypes, and a clear roadmap. You'll see exactly what we're building before a single line of code.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Build & Launch",
    description:
      "We develop with modern technologies, rigorous testing, and attention to every detail. Your project launches polished and performant.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support & Grow",
    description:
      "Our partnership doesn't end at launch. We provide ongoing support, updates, and optimization to keep your site ahead of the curve.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-midnight-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh-dark" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-6 inline-flex border-brand-500/20 text-brand-400 bg-brand-500/10">
            Our Process
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            From idea to{" "}
            <span className="text-brand-400">reality</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            A proven process refined through dozens of projects. Transparent,
            collaborative, and designed for results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="relative group">
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px bg-linear-to-r from-brand-500/30 to-transparent" />
                )}

                <div className="relative p-6 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm hover:bg-white/6 hover:border-brand-500/20 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                      <step.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <span className="font-mono text-sm text-brand-500/60">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}