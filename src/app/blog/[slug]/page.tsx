"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-4xl mb-4">Post not found</h1>
          <Link href="/blog" className="btn-primary">
            <span className="relative z-10">Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-display font-bold text-2xl mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p
          key={i}
          className="text-midnight-900/60 leading-relaxed mb-4"
        >
          {block}
        </p>
      );
    });
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-display font-medium text-brand-600 hover:text-brand-700 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-display font-semibold bg-brand-50 text-brand-600 rounded-full border border-brand-100">
                {post.category}
              </span>
              <span className="text-sm text-midnight-900/40 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-sm text-midnight-900/40 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-8 text-balance">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-sm">
                {post.authorInitial}
              </div>
              <div>
                <div className="font-display font-semibold text-sm">
                  {post.author}
                </div>
                <div className="text-xs text-midnight-900/40">
                  Team
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cover */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
        <AnimatedSection>
          <div
            className={`h-64 sm:h-80 rounded-2xl bg-linear-to-br ${post.color} flex items-center justify-center overflow-hidden`}
          >
            <div className="text-white/10 font-display font-bold text-[16rem] leading-none select-none">
              {post.title[0]}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <article className="prose-like">
            {renderContent(post.content)}
          </article>
        </AnimatedSection>

        {/* Share / Next */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 pt-8 border-t border-brand-100/30">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-display font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All posts
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-sm"
              >
                Work with us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}