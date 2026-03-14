"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { travelData } from "@/data/travelData";
import type { Destination } from "@/data/travelData";

const categories = [
  "All",
  ...Array.from(new Set(travelData.map((d) => d.meta))),
];

export default function TravelPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Destination | null>(null);

  const filtered =
    activeCategory === "All"
      ? travelData
      : travelData.filter((d) => d.meta === activeCategory);

  return (
    <main className="min-h-screen bg-background pt-28 text-text">
      {/* Hero header */}
      <section className="luxury-container mb-16 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-accent"
        >
          Curated Destinations
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl font-serif text-3xl uppercase tracking-[0.25em] md:text-5xl"
        >
          The world, edited for you.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-sm leading-relaxed text-neutral-600"
        >
          We do not list thousands of places. Only the dozen or so per season
          that feel essential, rare, and perfectly timed for your calendar.
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

      {/* Grid */}
      <section className="luxury-container pb-24">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((dest, i) => (
              <motion.article
                key={dest.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setSelected(dest)}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/80">
                      {dest.meta}
                    </p>
                    <h3 className="mt-1 font-serif text-xl uppercase tracking-[0.15em] text-white">
                      {dest.title}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-neutral-500">
                    {dest.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {dest.copy}
                  </p>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                      {dest.price}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 group-hover:translate-x-1 group-hover:text-accent transition-all">
                      View details →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/80">
                    {selected.meta} · {selected.country}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl uppercase tracking-[0.2em] text-white md:text-3xl">
                    {selected.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
                >
                  ×
                </button>
              </div>
              <div className="space-y-6 p-8">
                <div className="flex flex-wrap gap-3">
                  {[selected.duration, selected.country, selected.price].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-neutral-600"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {selected.copy}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Every detail of this journey is choreographed by your dedicated
                  Treva travel artist — from private transfers and villa selection
                  to restaurant reservations and experiences you didn&apos;t know
                  to ask for. Share your dates and preferences, and we&apos;ll
                  sketch a cinematic route tailored entirely to you.
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent/90"
                  >
                    Book this journey
                  </a>
                  <a
                    href="/ai-planner"
                    className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-accent hover:text-accent"
                  >
                    Customize with AI
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
