"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Zap,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@cslvanguard.com",
    link: "mailto:hello@cslvanguard.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    link: "tel:+1234567890",
    description: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote-first, Worldwide",
    link: "#",
    description: "We work with clients globally",
  },
];

const services = [
  "Custom Website",
  "Website Fix/Update",
  "Custom Components",
  "Web Security",
  "Online Marketing",
  "Web Hosting",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-badge mb-6 inline-flex">Contact</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Let&apos;s start{" "}
              <span className="gradient-text">something great</span>
            </h1>
            <p className="text-xl text-midnight-900/50 leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Tell us
              what you need and we&apos;ll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.title} delay={i * 0.1}>
                <a
                  href={method.link}
                  className="glass-card glass-card-hover rounded-2xl p-6 block group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                    <method.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {method.title}
                  </h3>
                  <p className="text-brand-600 font-medium text-sm mb-1">
                    {method.value}
                  </p>
                  <p className="text-xs text-midnight-900/40">
                    {method.description}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card rounded-3xl p-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-midnight-900/50 mb-8">
                      Thanks for reaching out. We&apos;ll get back to you within
                      24 hours with a detailed response.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="glass-card rounded-3xl p-8 sm:p-10"
                  >
                    <h2 className="font-display font-bold text-2xl mb-2">
                      Tell us about your project
                    </h2>
                    <p className="text-sm text-midnight-900/40 mb-8">
                      Fill out the form below and we&apos;ll craft a tailored
                      response.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-display font-medium mb-2">
                          Full Name <span className="text-brand-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm placeholder:text-midnight-900/25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-display font-medium mb-2">
                          Email <span className="text-brand-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm placeholder:text-midnight-900/25"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-sm font-display font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm placeholder:text-midnight-900/25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-display font-medium mb-2">
                          Service Needed <span className="text-brand-500">*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm text-midnight-900/70"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-sm font-display font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm text-midnight-900/70"
                      >
                        <option value="">Select a range</option>
                        <option value="< $5k">Less than $5,000</option>
                        <option value="$5k - $15k">$5,000 – $15,000</option>
                        <option value="$15k - $50k">$15,000 – $50,000</option>
                        <option value="> $50k">$50,000+</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-display font-medium mb-2">
                        Project Details{" "}
                        <span className="text-brand-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-brand-100 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm resize-none placeholder:text-midnight-900/25"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base">
                      <span className="relative z-10 flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6">
                    <Zap className="w-6 h-6 text-brand-500 mb-3" />
                    <h3 className="font-display font-bold text-lg mb-2">
                      Quick Response
                    </h3>
                    <p className="text-sm text-midnight-900/50 leading-relaxed">
                      We typically respond within 24 hours with a detailed
                      assessment and proposed next steps.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <MessageSquare className="w-6 h-6 text-brand-500 mb-3" />
                    <h3 className="font-display font-bold text-lg mb-2">
                      Free Consultation
                    </h3>
                    <p className="text-sm text-midnight-900/50 leading-relaxed">
                      Every project starts with a free discovery call. We&apos;ll
                      discuss your needs and provide an honest assessment.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <Globe className="w-6 h-6 text-brand-500 mb-3" />
                    <h3 className="font-display font-bold text-lg mb-2">
                      Work With Us Globally
                    </h3>
                    <p className="text-sm text-midnight-900/50 leading-relaxed">
                      We&apos;re remote-first and have worked with clients across
                      multiple continents and time zones.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-6 bg-linear-to-br from-brand-50 to-brand-100/50 border-brand-200/30">
                    <h3 className="font-display font-bold text-lg mb-2">
                      Not sure what you need?
                    </h3>
                    <p className="text-sm text-midnight-900/50 leading-relaxed mb-4">
                      That&apos;s perfectly fine. Just tell us about your business
                      and goals, and we&apos;ll recommend the best path forward.
                    </p>
                    <a
                      href="mailto:hello@cslvanguard.com"
                      className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-600"
                    >
                      Email us directly
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-surface-100 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-midnight-900/50">
              Quick answers to the questions we hear most often.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "It depends on scope, but most custom websites take 4–8 weeks from discovery to launch. Smaller projects like component libraries or security audits can be completed in 1–2 weeks.",
              },
              {
                q: "What is your pricing structure?",
                a: "We provide custom quotes based on project requirements. We offer both project-based pricing and retainer agreements for ongoing work. Every engagement starts with a free consultation.",
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Absolutely. We offer maintenance packages that include regular updates, security monitoring, performance optimization, and priority support.",
              },
              {
                q: "What technologies do you work with?",
                a: "Our primary stack is React/Next.js, TypeScript, and Tailwind CSS for frontend, with Node.js and PostgreSQL for backend. We're also experienced with Vue, Svelte, Python, and various cloud platforms.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Yes! We frequently collaborate with in-house teams, whether that means augmenting your development capacity, providing specialized expertise, or handling specific project components.",
              },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-bold text-base mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-midnight-900/50 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}