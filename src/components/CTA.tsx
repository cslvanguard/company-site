"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-600 via-brand-700 to-midnight-900" />
            <div className="absolute inset-0 bg-gradient-mesh-dark opacity-60" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-brand-400/20 blur-[60px]" />
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-brand-300/15 blur-[50px]" />

            <div className="relative px-8 sm:px-16 py-20 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-display font-semibold tracking-wider uppercase mb-8"
              >
                <Zap className="w-3.5 h-3.5" />
                Ready to start?
              </motion.div>

              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
                Let&apos;s build something
                <br />
                <span className="text-brand-300">extraordinary</span>
              </h2>

              <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
                Whether you need a brand-new site, a complete overhaul, or
                ongoing support — we&apos;re here to make it happen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-base text-brand-700 bg-white rounded-full hover:bg-brand-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 font-display font-semibold text-base text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}