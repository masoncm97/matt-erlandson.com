"use client";

import { CldImage } from "next-cloudinary";

export default function Scroll({ side }: { side: 'left' | 'right' }) {
  const images = {
    left: {
      main: "SELECTED_chvyfy",
      secondary: ["shirt-loop1_s4ctrz", "Damn_that_sucks_raxgdy", "Redbud_mebkwm"]
    },
    right: {
      main: "WORKS_rked0o",
      secondary: ["Gun_cg4z1b","posters2_u3hgo4", "Rockaway_nasmqf","201_Salsa_vwiynf"]
    }
  };

  return (
    <div
      className="no-scrollbar overflow-y-auto h-screen"
      style={{
        scrollSnapType: "y mandatory",
        scrollPaddingTop: "100vh",
      }}
      onScroll={(e) => {
        const scrollTop = e.currentTarget.scrollTop;
        if (scrollTop < 0) e.currentTarget.scrollTop = 0; // Prevent scrolling up
      }}
    >
      <div className="h-screen flex items-end">
        {/* Main image always aligned at bottom */}
        <CldImage
          src={images[side].main}
          loading="eager"
          width={1870}
          height={1250}
          alt={side === 'left' ? "SELECTED" : "WORKS"}
        />
      </div>
      {/* Other images below */}
      <div>
        {images[side].secondary.map((src, index) => (
          <CldImage
            key={src}
            src={src}
            loading="eager"
            width={1870}
            height={1250}
            alt={`sample ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 