"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import ShirtGallery from "./ShirtGallery";
import PosterGallery from "./PosterGallery";
import SingleImageViewer from "./SingeImageViewer";

export default function Scroll({ side }: { side: "left" | "right" }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const images = {
    left: {
      main: "SELECTED_chvyfy",
      secondary: [
        "shirt-loop1_s4ctrz",
        "Damn_that_sucks_raxgdy",
        "video_driftloop1_htgfkm",
        "Redbud_mebkwm"
      ]
    },
    right: {
      main: "WORKS_rked0o",
      secondary: [
        "Gun_cg4z1b",
        "posters2_u3hgo4",
        "Rockaway_nasmqf",
        "video_driftloop2_qnfvwq",
        "201_Salsa_vwiynf"
      ]
    }
  };

  return (
    <>
      <div
        className="no-scrollbar overflow-y-auto overflow-x-hidden h-[100svh]"
        style={{
          scrollSnapType: "y mandatory",
          scrollPaddingTop: "100vh",
        }}
        onScroll={(e) => {
          const scrollTop = e.currentTarget.scrollTop;
          if (scrollTop < 0) e.currentTarget.scrollTop = 0;
        }}
      >
        <div className="h-[100svh] flex items-end">
          <CldImage
            src={images[side].main}
            loading="eager"
            width={1870}
            height={1250}
            alt={side === "left" ? "SELECTED" : "WORKS"}
          />
        </div>

        <div>
          {images[side].secondary.map((src, index) => {
            if (src === "shirt-loop1_s4ctrz") {
              return <ShirtGallery key="shirt-gallery" />;
            }
            if (src === "posters2_u3hgo4") {
              return <PosterGallery key="poster-gallery" />;
            }

            const isVideoThumb = src.startsWith("video_");

            return (
              <div
                key={src}
                onClick={() => {
                  setExpanded(src);
                  setIsVideo(isVideoThumb);
                }}
                className="cursor-pointer"
              >
                {isVideoThumb ? (
                  <div className="w-full border-white border-x-[20px] border-y-[10px] md:border-x-[150px] md:border-y-[60px]">
                    <video
  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${src}.mp4`}
  poster={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${src}.jpg`}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="w-full h-auto"
/>
                  </div>
                ) : (
                  <CldImage
                    src={src}
                    loading="lazy"
                    width={1870}
                    height={1250}
                    alt={`sample ${index + 1}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {expanded && (
        <SingleImageViewer
          src={expanded}
          isVideo={isVideo}
          alt="Expanded view"
          onClose={() => setExpanded(null)}
        />
      )}
    </>
  );
}
