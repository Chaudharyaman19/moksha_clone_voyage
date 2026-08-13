import path from "node:path";
import fs from "node:fs/promises";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public/assets/about-optimized");

const jobs = [
  ["public/assets/about-hero-new.png", "about-hero-new.webp", { width: 1600, quality: 72 }],
  ["public/assets/about-story-1.png", "about-story-1.webp", { width: 720, height: 720, quality: 72 }],
  ["public/assets/about-story-2.png", "about-story-2.webp", { width: 520, height: 520, quality: 72 }],
  ["public/assets/about-story-3.png", "about-story-3.webp", { width: 520, height: 520, quality: 72 }],
  ["public/assets/promise-1.png", "promise-1.webp", { width: 720, height: 720, quality: 72 }],
  ["public/assets/promise-2.png", "promise-2.webp", { width: 520, height: 520, quality: 72 }],
  ["public/assets/promise-3.png", "promise-3.webp", { width: 520, height: 520, quality: 72 }],
  ["public/assets/about-reference/cremation_ritual_new.png", "cremation-ritual.webp", { width: 560, height: 560, quality: 72 }],
  ["public/assets/about-reference/pandit_ji_new.png", "pandit-ji.webp", { width: 560, height: 560, quality: 72 }],
  ["public/assets/about-reference/tehrvi_feast.png", "tehrvi-feast.webp", { width: 560, height: 560, quality: 72 }],
  ["public/assets/about-reference/family_support_new.png", "family-support.webp", { width: 560, height: 560, quality: 72 }],
  ["public/assets/harse.jpeg", "hearse-van.webp", { width: 900, quality: 72 }],
  ["public/assets/prayerhall.jpeg", "prayer-hall.webp", { width: 900, quality: 72 }],
  ["public/assets/funeralsamagri.jpeg", "samagri.webp", { width: 900, quality: 72 }],
  ["public/assets/sandeep_singh.png", "sandeep-singh.webp", { width: 256, height: 256, quality: 76 }],
  ["public/assets/madhukar_srujana.png", "madhukar-srujana.webp", { width: 256, height: 256, quality: 76 }],
  ["public/assets/man1.jpg", "madhukar-reddy-dasari.webp", { width: 320, height: 240, quality: 76 }],
  ["public/assets/girl.jpg", "srujana-paid.webp", { width: 320, height: 240, quality: 76 }],
];

await fs.mkdir(outDir, { recursive: true });

for (const [input, output, options] of jobs) {
  const transformer = sharp(path.join(root, input)).resize({
    width: options.width,
    height: options.height,
    fit: options.height ? "cover" : "inside",
    withoutEnlargement: true,
  });

  await transformer
    .webp({ quality: options.quality, effort: 6 })
    .toFile(path.join(outDir, output));
}
