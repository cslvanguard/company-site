"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-brand-300/10 blur-[80px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-brand-400/8 blur-[100px] animate-float-slow" />
      <div className="absolute top-[40%] right-[30%] w-48 h-48 rounded-full bg-brand-200/15 blur-[60px] animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-8 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              Pioneering Web Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-8"
          >
            We build websites{" "}
            <span className="relative inline-block">
              <span className="gradient-text">that lead</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-brand-400 to-brand-600 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-midnight-900/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From custom development to security and marketing, we create
            exceptional digital experiences that help businesses stand out,
            scale, and succeed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary text-base">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/projects" className="btn-secondary text-base">
              <Play className="w-4 h-4" />
              See Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "5+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "4+yrs", label: "Industry Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-midnight-900/40 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => {
            const element = document.getElementById("tech-stack");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs text-midnight-900/30 font-display font-medium tracking-wider uppercase group-hover:text-brand-500 transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border-2 border-brand-300/30 flex justify-center pt-1.5 group-hover:border-brand-400 transition-colors"
          >
            <div className="w-1 h-1.5 rounded-full bg-brand-400 group-hover:bg-brand-600 transition-colors" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}