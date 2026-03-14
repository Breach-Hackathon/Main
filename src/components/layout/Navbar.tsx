"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#experiences", label: "Experiences" },
  { href: "#villas", label: "Villas" },
  { href: "#destinations", label: "Destinations" },
  { href: "#ai-planner", label: "AI Planner" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      <nav
        className={`mt-6 flex w-[min(1100px,92vw)] items-center justify-between rounded-full border px-6 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-500 ${
          scrolled
            ? "border-white/40 bg-white/70 text-text shadow-[0_18px_50px_rgba(15,23,42,0.15)] backdrop-blur-xl"
            : "border-white/10 bg-white/10 text-text backdrop-blur-0"
        }`}
      >
        <span className="font-serif text-xs md:text-sm">
          Treva
          <span className="ml-2 font-sans tracking-[0.3em] opacity-60">
            The Travel Company
          </span>
        </span>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false}
              className="text-[0.7rem] tracking-[0.3em] hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          scroll={false}
          className="rounded-full border border-text px-4 py-2 text-[0.65rem] tracking-[0.3em] transition-colors hover:bg-text hover:text-white"
        >
          Schedule
        </Link>
      </nav>
    </header>
  );
}

