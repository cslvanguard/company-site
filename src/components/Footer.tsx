"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const footerLinks = {
  Services: [
    { label: "Custom Websites", href: "/projects" },
    { label: "Website Updates", href: "/projects" },
    { label: "Custom Components", href: "/projects" },
    { label: "Web Security", href: "/projects" },
    { label: "Online Marketing", href: "/projects" },
    { label: "Web Hosting", href: "/projects" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Support", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-midnight-900 text-white overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh-dark opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top Section */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                    <span className="text-white font-display font-bold text-lg">
                      C
                    </span>
                  </div>
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  CSL <span className="text-brand-400">Vanguard</span>
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                Pioneering web solutions that transform how businesses connect
                with their audiences. Built by developers, for visionaries.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:hello@cslvanguard.com"
                  className="flex items-center gap-3 text-white/50 hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@cslvanguard.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-white/50 hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-3 text-white/50">
                  <MapPin className="w-4 h-4" />
                  Remote-first, Worldwide
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-display font-semibold text-sm text-white/80 mb-5 uppercase tracking-wider">
                    {category}
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/40 hover:text-brand-400 transition-colors duration-300 flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} CSL Vanguard. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-white/30 hover:text-brand-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
