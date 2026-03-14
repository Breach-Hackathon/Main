'use client';

import { useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  images: HTMLImageElement[];
};

export default function HeroSequence({ images }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, Math.max(images.length - 1, 0)]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frameId: number;

    const render = () => {
      if (!canvas || !context || images.length === 0) {
        frameId = requestAnimationFrame(render);
        return;
      }

      const index = Math.floor(frameIndex.get());
      const image = images[index];
      if (!image) {
        frameId = requestAnimationFrame(render);
        return;
      }

      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      const canvasRatio = width / height;
      const imageRatio = image.width / image.height;

      let drawWidth = width;
      let drawHeight = height;
      let x = 0;
      let y = 0;

      if (imageRatio > canvasRatio) {
        drawHeight = height;
        drawWidth = image.width * (height / image.height);
        x = (width - drawWidth) / 2;
      } else {
        drawWidth = width;
        drawHeight = image.height * (width / image.width);
        y = (height - drawHeight) / 2;
      }

      context.drawImage(image, x, y, drawWidth, drawHeight);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [images, frameIndex]);

  return (
    <section
      ref={containerRef}
      id="experiences"
      className="relative h-[420vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.4em]">
            Treva Private Journeys
          </p>
          <h1 className="max-w-3xl px-6 font-serif text-3xl uppercase tracking-[0.3em] md:text-6xl">
            What are you waiting for?
          </h1>
          <p className="mt-6 max-w-md px-6 text-xs font-light tracking-[0.25em] md:text-sm">
            Seamless itineraries, private villas, and impossibly smooth travel
            from runway to retreat.
          </p>
          <div className="pointer-events-auto mt-10 flex gap-4">
            <button className="rounded-full border border-white px-10 py-3 text-[0.7rem] uppercase tracking-[0.3em] transition-colors hover:bg-white hover:text-black">
              Schedule
            </button>
            <button className="hidden rounded-full bg-white/10 px-10 py-3 text-[0.7rem] uppercase tracking-[0.3em] backdrop-blur-md hover:bg-white/20 md:inline-flex">
              Discover Villas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

