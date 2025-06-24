"use client";

import { CldImage } from "next-cloudinary";

export default function Logo() {
  return (
    <div className="absolute center-absolute z-50">
      <a
        href="mailto:matt@heatdeath.us"
        tabIndex={-1}
        className="text-blue-600 underline text-4xl tracking-wide font-europa select-none focus:outline-none"
      >
        matt@heatdeath.us
      </a>
    </div>
);
}