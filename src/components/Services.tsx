"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Globe,
  Wrench,
  Puzzle,
  Shield,
  Megaphone,
  Server,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "Bespoke web solutions built from the ground up. Pixel-perfect designs, blazing-fast performance, and experiences your users will remember.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Wrench,
    title: "Fix & Improve",
    description:
      "Revitalize your existing site. We diagnose issues, optimize performance, update outdated code, and breathe new life into your web presence.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Puzzle,
    title: "Custom Components",
    description:
      "Need something specific? We build reusable, high-quality UI components that integrate seamlessly into your existing architecture.",
    color: "from-indigo-500 to-violet-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Shield,
    title: "Web Security",
    description:
      "Protect your digital assets. From vulnerability audits to implementation of robust security measures, we keep your site and data safe.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Megaphone,
    title: "Online Marketing",
    description:
      "Drive growth with data-driven SEO, targeted campaigns, and strategic content that connects you with the right audience at the right time.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description:
      "Reliable, lightning-fast hosting built for modern websites. 99.9% uptime, automatic scaling, and infrastructure you can count on.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="section-badge mb-6 inline-flex">What We Do</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Services that{" "}
            <span className="gradient-text">move the needle</span>
          </h2>
          <p className="text-lg text-midnight-900/50 max-w-2xl mx-auto">
            End-to-end web solutions designed to elevate your business. Every
            service is crafted with precision and delivered with care.
          </p>
        </AnimatedSection>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-card rounded-2xl p-8 h-full"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl p-px" />

                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="font-display font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-midnight-900/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-600 group-hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}