"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

interface Props {
  src: string;
  isVideo?: boolean;
  alt?: string;
  onClose: () => void;
}

export default function SingleImageViewer({ src, isVideo = false, alt = "Artwork", onClose }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (!isVideo) {
      const img = new Image();
      img.src = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${src}.jpg`;
      img.onload = () => setLoaded(true);
    } else {
      setLoaded(true); // assume video is ready once component mounts
    }

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose, isVideo]);

  if (!loaded) return null;

  return (
    <div
      className="gallery-modal-open fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={onClose} className="cursor-pointer">
          {isVideo ? (
            <video
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${src}.mp4`}
              controls
              autoPlay
              className="w-full h-auto"
            />
          ) : (
            <CldImage
              src={src}
              width={1870}
              height={1250}
              alt={alt}
              className="w-full h-auto"
            />
          )}
        </div>

        <div
          className="absolute top-4 right-4 cursor-pointer w-6 h-6"
          onClick={onClose}
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
  );
}
