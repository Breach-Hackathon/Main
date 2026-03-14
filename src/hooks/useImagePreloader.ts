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
      
      const handleLoad = () => {
        if (cancelled) return;
        loadedCount += 1;
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        loadedImages[i - 1] = img;
        if (loadedCount === totalFrames) {
          // Fill any holes with the last available image or skip
          setImages(loadedImages.filter(Boolean));
        }
      };

      const handleError = () => {
        if (cancelled) return;
        console.warn(`Failed to load image: ${img.src}`);
        loadedCount += 1; // Still increment to not block progress
        setProgress(Math.floor((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setImages(loadedImages.filter(Boolean));
        }
      };

      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = `${path}/${i.toString().padStart(3, "0")}.jpg`;
    }

    return () => {
      cancelled = true;
    };
  }, [path, totalFrames]);

  return { images, progress };
};

