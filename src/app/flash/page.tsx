"use client";

import { useMemo } from "react";

export default function FlashPage() {
  // ✅ Adjust spacing between chunks (in px). Set to 0 to butt them together.
  const gapPx = 24;

  // ✅ FULL URLs (recommended: f_auto,q_auto). Do NOT force .jpg/.png.
  const imageUrls = useMemo(
    () => [
      "https://res.cloudinary.com/djvtbj1os/image/upload/v1768758254/flash_block_1_w3rmxi",
      "https://res.cloudinary.com/djvtbj1os/image/upload/v1768758252/flash_block_2_liikyk",
      "https://res.cloudinary.com/djvtbj1os/image/upload/v1768758253/flashblock_3_qm2kwt"
      // add more...
    ],
    []
  );

  return (
    <main className="bg-white">
      {/* This is the key: a scroll container, since body is overflow-hidden globally */}
      <div className="no-scrollbar h-[100svh] overflow-y-auto overflow-x-hidden">
        {/* Full-bleed mobile; white side margins on bigger screens */}
        <div className="px-0 sm:px-4 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col" style={{ gap: `${gapPx}px` }}>
              {imageUrls.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Flash sheet ${index + 1}`}
                  className="w-full h-auto block select-none"
                  draggable={false}
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    WebkitUserSelect: "none",
                    userSelect: "none",
                    WebkitTouchCallout: "none",
                  }}
                  onDragStart={(e) => e.preventDefault()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}