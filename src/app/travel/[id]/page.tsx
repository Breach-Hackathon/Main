"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { travelData } from "@/data/travelData";

export default function TravelPlanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const plan = travelData.find((p) => p.id === id);

  if (!plan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background pt-28 text-text">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-3xl uppercase tracking-[0.2em]">
            Destination not found
          </h1>
          <Link
            href="/travel"
            className="inline-block text-[0.7rem] uppercase tracking-[0.2em] text-accent hover:underline"
          >
            ← Back to Destinations
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-text">
      {/* Hero image */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <img
          src={plan.image}
          alt={plan.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {plan.meta}
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/80">
                  {plan.country} · {plan.duration}
                </span>
              </div>
              <h1 className="max-w-4xl font-serif text-4xl uppercase tracking-[0.2em] text-white md:text-6xl">
                {plan.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="luxury-container py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_350px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl font-light leading-relaxed text-neutral-700">
              {plan.copy}
            </p>

            <div className="h-px w-full bg-neutral-100" />

            <div className="space-y-6">
              <h2 className="font-serif text-2xl uppercase tracking-[0.15em]">
                The Experience
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-neutral-600">
                Every detail of this journey is choreographed by your dedicated
                Treva travel artist. We secure access to hidden cultural sites,
                arrange private transfers via helicopter or luxury tender, and
                ensure your villa matches your exact aesthetic and comfort preferences.
              </p>
              <p className="text-[0.95rem] leading-[1.85] text-neutral-600">
                This itinerary serves as a canvas. When you schedule your private
                consultation, we will completely reshape these foundations around
                your dates, your travel companions, and the feelings you wish to evoke.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] h-fit sticky top-32"
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-400">
                  Starting from
                </p>
                <p className="font-serif text-2xl uppercase tracking-[0.1em] text-accent">
                  {plan.price}
                </p>
              </div>

              <div className="space-y-4 border-t border-neutral-100 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Duration</span>
                  <span className="font-medium">{plan.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Destinations</span>
                  <span className="font-medium">{plan.country}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent/90"
                >
                  Request Consultation
                </Link>
                <Link
                  href="/ai-planner"
                  className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-accent hover:text-accent"
                >
                  Customize with AI
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
