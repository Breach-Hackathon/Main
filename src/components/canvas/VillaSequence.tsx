'use client';

import { useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  images: HTMLImageElement[];
};

export default function VillaSequence({ images }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.9,
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
      id="villas"
      className="relative h-[320vh] bg-surface"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-black/20 text-white">
          <div className="luxury-container space-y-4 text-left">
            <p className="text-xs uppercase tracking-[0.35em]">
              Private Villa Collection
            </p>
            <h2 className="max-w-xl font-serif text-3xl uppercase tracking-[0.3em] md:text-5xl">
              From jet bridge to infinity pool.
            </h2>
            <p className="max-w-md text-xs font-light tracking-[0.2em] md:text-sm">
              Ultra-private homes, cliffside estates, and island compounds,
              curated and serviced end-to-end by Treva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

