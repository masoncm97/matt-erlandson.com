"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

interface GalleryViewerProps {
  frames: string[];
  label?: string;
  intervalMs?: number;
}

export default function GalleryViewer({ frames, label = "item", intervalMs = 400 }: GalleryViewerProps) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const [viewIndex, setViewIndex] = useState(0);
  let touchStartX = 0;

  useEffect(() => {
    if (!open) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % frames.length);
      }, intervalMs);
      return () => clearInterval(interval);
    }
  }, [open, intervalMs, frames.length]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const openViewer = (index: number) => {
    setViewIndex(index);
    setOpen(true);
  };

  const next = () => setViewIndex((prev) => (prev + 1) % frames.length);
  const prev = () => setViewIndex((prev) => (prev - 1 + frames.length) % frames.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
  };

  return (
    <>
      {/* Flashing preview */}
      <div className="cursor-pointer" onClick={() => openViewer(current)}>
        <CldImage
          src={frames[current]}
          width={1870}
          height={1250}
          alt={`${label} preview`}
          loading="lazy"
        />
      </div>

      {/* Expanded viewer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative w-full max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <CldImage
              src={frames[viewIndex]}
              width={1870}
              height={1250}
              alt={`${label} ${viewIndex + 1}`}
              className="w-full h-auto"
            />

            {/* Left arrow */}
            <div
              className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer w-8 h-8"
              onClick={prev}
            >
              <CldImage
                src="Left_Arrow_xxtahy"
                width={64}
                height={64}
                alt="Previous"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right arrow */}
            <div
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer w-8 h-8"
              onClick={next}
            >
              <CldImage
                src="Right_Arrow_iuc0l2"
                width={64}
                height={64}
                alt="Next"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Close icon */}
            <div
              className="absolute top-4 right-4 cursor-pointer w-6 h-6"
              onClick={() => setOpen(false)}
            >
              <CldImage
                src="X_ljarq2"
                width={48}
                height={48}
                alt="Close"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
