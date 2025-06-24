"use client";

import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

export default function InstagramLink() {
  const [dim, setDim] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const modalOpen = document.querySelector(".gallery-modal-open");
      setDim(!!modalOpen);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://www.instagram.com/matterlandson/"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-4 right-4 z-40 w-8 h-8 sm:w-6 sm:h-6 transition-opacity duration-300 ${
        dim ? "opacity-30 pointer-events-none" : "opacity-100"
      }`}
    >
      <CldImage
        src="insta_logo_w1jmxw"
        width={48}
        height={48}
        alt="Instagram"
        className="w-full h-full object-contain"
      />
    </a>
  );
}
