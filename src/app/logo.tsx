"use client";

import { CldImage } from "next-cloudinary";

export default function Logo() {
  return (
    <div className="absolute center-absolute">
      <CldImage
        src={"matt_3_qbsnpr"} // Replace with your Cloudinary public ID
        loading="eager"
        alt="Logo"
        width={800} // Base width
        height={800} // Base height
        className="object-contain w-[16rem] h-[16rem] sm:w-[12rem] sm:h-[12rem] md:w-[16rem] md:h-[16rem] lg:w-[20rem] lg:h-[20rem]"
      />
    </div>)
}
