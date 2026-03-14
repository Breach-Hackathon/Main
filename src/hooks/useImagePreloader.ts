import { useEffect, useState } from "react";

export const useImagePreloader = (path: string, totalFrames: number) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let cancelled = false;

    for (let i = 1; i <= totalFrames; i += 1) {
      const img = new Image();
      img.src = `${path}/${i.toString().padStart(3, "0")}.jpg`;
      img.onload = () => {
        if (cancelled) return;
        loadedCount += 1;
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        loadedImages[i - 1] = img;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
        }
      };
    }

    return () => {
      cancelled = true;
    };
  }, [path, totalFrames]);

  return { images, progress };
};

