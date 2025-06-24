import GalleryViewer from "./GalleryViewer";

const shirtFrames = [
  "shirt_1_ulf5va",
  "shirt_2_a3ewwb",
  "shirt_3_upaccj",
  "shirt_4_v440dm",
  "shirt_5_q3s0ai",
  "shirt_6_zysbdu",
  "shirt_7_aih9a5",
  "shirt_8_yosibo",
  "shirt_9_q1j9mg",
  "shirt_10_xavnba",
];

export default function ShirtGallery() {
  return <GalleryViewer frames={shirtFrames} label="shirt" intervalMs={400} />;
}
