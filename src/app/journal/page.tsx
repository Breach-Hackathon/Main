"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogData } from "@/data/blogData";

const categories = [
  "All",
  ...Array.from(new Set(blogData.map((p) => p.category))),
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogData
      : blogData.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background pt-28 text-text">
      {/* Header */}
      <section className="luxury-container mb-16 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-accent"
        >
          The Treva Journal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl font-serif text-3xl uppercase tracking-[0.25em] md:text-5xl"
        >
          Stories from the world&apos;s quietest corners.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-sm leading-relaxed text-neutral-600"
        >
          Destination guides, travel philosophy, and dispatches from our network
          of travel artists — written for those who travel with intention.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="luxury-container mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-all ${
                activeCategory === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {filtered.length > 0 && (
        <section className="luxury-container mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href={`/journal/${filtered[0].id}`}>
              <article className="group grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 p-8 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-accent">
                      {filtered[0].category}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400">
                      {filtered[0].date}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl uppercase tracking-[0.18em] md:text-3xl">
                    {filtered[0].title}
                  </h2>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {filtered[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400">
                      {filtered[0].readTime}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent group-hover:translate-x-1 transition-transform">
                      Read story →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Article grid */}
      <section className="luxury-container pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link href={`/journal/${post.id}`}>
                <article className="group overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[0.55rem] uppercase tracking-[0.2em] text-neutral-700 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl uppercase tracking-[0.15em]">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                    <p className="pt-1 text-[0.65rem] uppercase tracking-[0.2em] text-accent group-hover:translate-x-1 transition-transform">
                      Read story →
                    </p>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
