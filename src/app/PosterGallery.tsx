import GalleryViewer from "./GalleryViewer";

const posterFrames = [
  "poster_1_nlkjyg",
  "poster_2_u4cgjt",
  "poster_3_w6swny",
  "poster_4_sntfxo",
  "poster_5_pcssjq",
  "poster_6_qaxdek",
  "poster_7_aouhpa",
  "poster_8_in7x1h",
  "poster_9_neyzyp",
  "poster_10_q0xts5",
  "poster_11_r0wp3k",
  "poster_12_dyzqup",
];

export default function PosterGallery() {
  return <GalleryViewer frames={posterFrames} label="poster" intervalMs={400} />;
}
