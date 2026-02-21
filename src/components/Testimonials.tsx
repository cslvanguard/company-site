"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechBridge Solutions",
    content:
      "CSL Vanguard transformed our online presence completely. Their attention to detail and technical expertise exceeded every expectation. Our conversion rate jumped 40% within the first month.",
    rating: 5,
    initial: "S",
  },
  {
    name: "James Okoro",
    role: "Founder, GreenLeaf Market",
    content:
      "Working with them felt like having an in-house team. They understood our vision immediately and delivered a site that perfectly captures our brand. The ongoing support has been exceptional.",
    rating: 5,
    initial: "J",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, NovaCorp",
    content:
      "The security audit they performed uncovered vulnerabilities we had no idea existed. Their thorough approach and clear communication made the entire process smooth and stress-free.",
    rating: 5,
    initial: "E",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-6 inline-flex">Testimonials</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Loved by{" "}
            <span className="gradient-text">our clients</span>
          </h2>
          <p className="text-lg text-midnight-900/50 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what the people
            we&apos;ve worked with have to say.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 h-full flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-300/40 mb-4" />

                <p className="text-midnight-900/60 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-sm">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-midnight-900/40">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
