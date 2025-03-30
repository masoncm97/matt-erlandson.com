"use client";

import { CldImage } from "next-cloudinary";

export default function RightScroll() {
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
      {/* WORKS image always aligned at bottom */}
      <CldImage
        src={"WORKS_rked0o"}
        loading="eager"
        width={1870}
        height={1250}
        alt={"WORKS"}
      />
    </div>
    {/* Other images below */}
    <div>
      <CldImage
        src={"Artboard_6_l7r5sr"}
        loading="eager"
        width={1870}
        height={1250}
        alt={"sample 3"}
      />
      <CldImage
        src={"cld-sample-5"}
        loading="eager"
        width={1870}
        height={1250}
        alt={"sample 5"}
      />
    </div>
  </div>)
}
