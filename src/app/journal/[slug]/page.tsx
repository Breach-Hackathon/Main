"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogData } from "@/data/blogData";

export default function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = blogData.find((p) => p.id === slug);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background pt-28 text-text">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-3xl uppercase tracking-[0.2em]">
            Article not found
          </h1>
          <Link
            href="/journal"
            className="inline-block text-[0.7rem] uppercase tracking-[0.2em] text-accent hover:underline"
          >
            ← Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-text">
      {/* Hero image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {post.category}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
                  {post.date} · {post.readTime}
                </span>
              </div>
              <h1 className="max-w-3xl font-serif text-3xl uppercase tracking-[0.2em] text-white md:text-5xl">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="luxury-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <p className="text-lg font-light italic leading-relaxed text-neutral-600">
            {post.excerpt}
          </p>

          <div className="h-px w-16 bg-accent" />

          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-[0.95rem] leading-[1.85] text-neutral-700"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex items-center justify-between border-t border-neutral-100 pt-8">
            <Link
              href="/journal"
              className="text-[0.7rem] uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-accent"
            >
              ← Back to Journal
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-accent px-6 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Plan a trip like this
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
