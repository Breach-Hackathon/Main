'use client';

import { useMemo } from "react";
import { motion } from "framer-motion";
import HeroSequence from "@/components/canvas/HeroSequence";
import Button from "@/components/ui/Button";
import PackageCard from "@/components/ui/PackageCard";
import AiTripPlanner from "@/components/ui/AiTripPlanner";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const HERO_FRAMES = 264;

export default function HomePage() {
  const hero = useImagePreloader("/Treva Hero Section", HERO_FRAMES);

  const isLoaded = hero.images.length > 0;

  const destinations = useMemo(
    () => [
      {
        title: "Amalfi by Helicopter",
        subtitle: "Italy · 5 nights",
        copy: "Arrive by private rotor, descend to a cantilevered villa, and dine in cliffside grottoes lit only by candlelight and the Tyrrhenian Sea.",
        meta: "Signature Itinerary",
      },
      {
        title: "Kyoto Hidden Ryokan",
        subtitle: "Japan · 7 nights",
        copy: "Tatami-mat suites, private onsen rituals, and after-hours access to lantern-lit districts reserved quietly for Treva guests.",
        meta: "Cultural Immersion",
      },
      {
        title: "Patagonia Sky Lodges",
        subtitle: "Chile · 6 nights",
        copy: "Glass-domed lodges beneath the southern sky, glacier landings, and chef-driven fire dinners far beyond the last trailhead.",
        meta: "Expedition Luxury",
      },
    ],
    [],
  );

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-text">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-[0.4em]">
            Crafting your journey
          </p>
          <div className="relative mt-4 h-1.5 w-64 overflow-hidden rounded-full bg-surface">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${hero.progress}%` }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            />
          </div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500">
            {hero.progress}% prelude to the pier
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-background text-text">
      <HeroSequence images={hero.images} />

      <section
        id="about"
        className="bg-background py-24 md:py-32"
      >
        <div className="luxury-container grid gap-12 md:grid-cols-[1.3fr_minmax(0,1fr)] md:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Ultra-luxury travel concierge
            </p>
            <h2 className="font-serif text-3xl uppercase tracking-[0.3em] md:text-5xl">
              Seamless, cinematic journeys.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-700">
              Treva designs hyper-detailed itineraries that feel less like
              trips, and more like films written around you. From runway to
              pier, every transfer, table, and turn-down is choreographed yet
              quietly invisible.
            </p>
          </div>
          <div className="space-y-4 border-l pl-8 text-xs uppercase tracking-[0.3em] text-neutral-600">
            <p>Interior to pier in a single, unbroken motion.</p>
            <p>Dedicated travel artists, not agents.</p>
            <p>Vetted villas, yachts, and jets in one continuum.</p>
          </div>
        </div>
      </section>


      <section
        id="destinations"
        className="relative overflow-hidden bg-black text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-60"
            src="/globe-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 py-24 md:py-32">
          <div className="luxury-container space-y-12">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">
                Destinations
              </p>
              <h2 className="max-w-2xl font-serif text-3xl uppercase tracking-[0.3em] md:text-5xl">
                The world, edited for you.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-neutral-200">
                We do not list thousands of places. Only the dozen or so per
                season that feel essential, rare, and perfectly timed for your
                calendar.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {destinations.map((destination) => (
                <motion.div
                  key={destination.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <PackageCard {...destination} />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-300">
                Limited itineraries released each quarter.
              </p>
              <Button variant="primary">Request season dossier</Button>
            </div>
          </div>
        </div>
      </section>

      <AiTripPlanner />

      <section
        id="contact"
        className="bg-surface py-20 md:py-28"
      >
        <div className="luxury-container grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Begin your departure
            </p>
            <h2 className="font-serif text-3xl uppercase tracking-[0.3em] md:text-4xl">
              Schedule a private consultation.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-700">
              Share the rough outlines—dates, people, a feeling—and your Treva
              artist will sketch a cinematic route, complete with villas,
              transfers, and experiences you did not know to ask for.
            </p>
          </div>
          <form className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-xs">
                <label className="uppercase tracking-[0.26em] text-neutral-500">
                  Name
                </label>
                <input
                  className="w-full border-b border-neutral-200 bg-transparent pb-2 text-sm outline-none focus:border-accent"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1 text-xs">
                <label className="uppercase tracking-[0.26em] text-neutral-500">
                  Email
                </label>
                <input
                  className="w-full border-b border-neutral-200 bg-transparent pb-2 text-sm outline-none focus:border-accent"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <label className="uppercase tracking-[0.26em] text-neutral-500">
                Ideal dates & destinations
              </label>
              <input
                className="w-full border-b border-neutral-200 bg-transparent pb-2 text-sm outline-none focus:border-accent"
                placeholder="For example: late June, Amalfi + Capri"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="uppercase tracking-[0.26em] text-neutral-500">
                Notes
              </label>
              <textarea
                className="min-h-[80px] w-full resize-none border-b border-neutral-200 bg-transparent pb-2 text-sm outline-none focus:border-accent"
                placeholder="Tell us how you like to arrive, unwind, and explore."
              />
            </div>
            <div className="flex items-center justify-between pt-3">
              <p className="text-[0.65rem] uppercase tracking-[0.26em] text-neutral-500">
                Response within one business day.
              </p>
              <Button type="submit" variant="outline">
                Send request
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

