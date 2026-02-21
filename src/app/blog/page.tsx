"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts, categories } from "@/lib/blog-data";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-badge mb-6 inline-flex">Blog</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
              Thoughts &{" "}
              <span className="gradient-text">insights</span>
            </h1>
            <p className="text-xl text-midnight-900/50 leading-relaxed">
              Ideas on web development, design, security, marketing, and the
              occasional deep dive into what makes great technology tick.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Content */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-display text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-600 text-white shadow-glow"
                      : "bg-white text-midnight-900/50 border border-brand-100 hover:border-brand-300 hover:text-brand-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Featured Post */}
          {activeCategory === "All" && (
            <AnimatedSection className="mb-12">
              <Link href={`/blog/${blogPosts[0].slug}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div
                      className={`h-64 lg:h-auto bg-linear-to-br ${blogPosts[0].color} flex items-center justify-center`}
                    >
                      <div className="text-white/20 font-display font-bold text-[10rem] leading-none select-none">
                        V
                      </div>
                    </div>
                    <div className="p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-display font-semibold bg-brand-50 text-brand-600 rounded-full">
                          {blogPosts[0].category}
                        </span>
                        <span className="text-xs text-midnight-900/40 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 group-hover:text-brand-600 transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-midnight-900/50 leading-relaxed mb-6">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-midnight-900/40">
                          <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
                            <span className="text-xs font-display font-bold text-brand-600">
                              {blogPosts[0].authorInitial}
                            </span>
                          </div>
                          {blogPosts[0].date}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-600 group-hover:gap-3 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          )}

          {/* Post Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {(activeCategory === "All"
                ? filteredPosts.slice(1)
                : filteredPosts
              ).map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <motion.article
                      whileHover={{ y: -4 }}
                      className="glass-card rounded-2xl overflow-hidden h-full group flex flex-col"
                    >
                      <div
                        className={`h-40 bg-linear-to-br ${post.color} flex items-center justify-center`}
                      >
                        <div className="text-white/15 font-display font-bold text-8xl leading-none select-none">
                          {post.title[0]}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-0.5 text-xs font-display font-semibold bg-brand-50 text-brand-600 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-midnight-900/40 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg mb-3 group-hover:text-brand-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-midnight-900/50 leading-relaxed flex-1 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-midnight-900/40">
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-display font-semibold text-brand-600 group-hover:gap-2 transition-all">
                            Read
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}