"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/galleryData";

const categories = [
  "All",
  ...Array.from(new Set(galleryData.map((g) => g.category))),
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((g) => g.category === activeCategory);

  const lightboxImage = galleryData.find((g) => g.id === lightbox);

  return (
    <main className="min-h-screen bg-background pt-28 text-text">
      {/* Header */}
      <section className="luxury-container mb-16 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-accent"
        >
          Visual Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl font-serif text-3xl uppercase tracking-[0.25em] md:text-5xl"
        >
          Moments worth remembering.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg text-sm leading-relaxed text-neutral-600"
        >
          A curated gallery from Treva journeys — captured by our guests and
          travel artists across every continent.
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

      {/* Masonry grid */}
      <section className="luxury-container pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, i) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="mb-4 break-inside-avoid"
              >
                <div
                  onClick={() => setLightbox(image.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      image.span === "tall"
                        ? "aspect-[3/4]"
                        : image.span === "wide"
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
                      {image.category}
                    </p>
                    <p className="mt-1 text-sm font-light text-white">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                  {lightboxImage.category}
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {lightboxImage.caption}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
