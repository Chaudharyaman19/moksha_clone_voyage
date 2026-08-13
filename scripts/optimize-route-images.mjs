import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public/assets/route-optimized");

const jobs = [
  ["public/assets/contact/contact-hero-new.png", "contact-hero.webp", { width: 1600, quality: 72 }],
  ["public/assets/images/why-families-trust-ritual.png", "request-trust-ritual.webp", { width: 640, quality: 72 }],
  ["public/assets/namo-gange/vol1.png", "volunteer-trust.webp", { width: 520, height: 520, quality: 72 }],
  ["public/assets/two.jpg", "blog-two.webp", { width: 900, quality: 74 }],
  ["public/assets/one.jpg", "blog-one.webp", { width: 900, quality: 74 }],
  ["public/assets/c.jpg", "blog-c.webp", { width: 900, quality: 74 }],
  ["public/assets/bodytransport.jpeg", "video-body-transport.webp", { width: 720, quality: 72 }],
  ["public/assets/funeraldecoration.jpeg", "video-funeral-decoration.webp", { width: 720, quality: 72 }],
  ["public/assets/normalharse.jpeg", "video-hearse.webp", { width: 720, quality: 72 }],
  ["public/assets/prayerhall.jpeg", "video-prayer-hall.webp", { width: 720, quality: 72 }],
  ["public/assets/callingrelative.jpeg", "video-calling-relative.webp", { width: 720, quality: 72 }],
  ["public/gallary/g1.png", "gallery-g1.webp", { width: 720, height: 720, quality: 72 }],
  ["public/gallary/g2.png", "gallery-g2.webp", { width: 720, height: 720, quality: 72 }],
  ["public/gallary/g3.png", "gallery-g3.webp", { width: 720, height: 720, quality: 72 }],
  ["public/gallary/g4.png", "gallery-g4.webp", { width: 720, height: 720, quality: 72 }],
  ["public/gallary/g6.png", "gallery-g6.webp", { width: 720, height: 720, quality: 72 }],
  ["public/gallary/gg5.png", "gallery-gg5.webp", { width: 720, height: 720, quality: 72 }],
];

const galleryDirs = [
  "public/assets/how-we-help",
  "public/assets/serving",
  "public/assets/about-reference",
  "public/hero-images",
  "public/gallary",
];

const toGalleryOutput = (input) =>
  `gallery-${input
    .replace(/^public\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()}.webp`;

await fs.mkdir(outDir, { recursive: true });

for (const [input, output, options] of jobs) {
  await sharp(path.join(root, input))
    .resize({
      width: options.width,
      height: options.height,
      fit: options.height ? "cover" : "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: options.quality, effort: 6 })
    .toFile(path.join(outDir, output));
}

for (const dir of galleryDirs) {
  const entries = await fs.readdir(path.join(root, dir), { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !/\.(png|jpe?g)$/i.test(entry.name)) continue;

    const input = path.join(dir, entry.name);
    const output = toGalleryOutput(input);

    await sharp(path.join(root, input))
      .resize({
        width: 720,
        height: 720,
        fit: "cover",
        withoutEnlargement: true,
      })
      .webp({ quality: 72, effort: 6 })
      .toFile(path.join(outDir, output));
  }
}
