// Adds Cloudinary delivery transforms (auto format/quality + max width) to CSS background images, which bypass next/image.
export function optimizeCloudinary(url: string, width: number): string {
  const marker = "/image/upload/";
  if (!url.includes("res.cloudinary.com") || !url.includes(marker)) return url;
  const [head, rest] = url.split(marker);
  if (!/^v\d+\//.test(rest)) return url; // already has transforms
  return `${head}${marker}f_auto,q_auto,w_${width}/${rest}`;
}

// Social crawlers (WhatsApp, Facebook, LinkedIn, X) want a real 1200x630 JPG/PNG. Cloudinary crops to that and converts webp covers to JPG.
export function toOgImage(url: string): string {
  const marker = "/image/upload/";
  if (!url.includes("res.cloudinary.com") || !url.includes(marker)) return url;
  const [head, rest] = url.split(marker);
  const file = rest.replace(/^(?:[^/]*,[^/]*\/)+/, ""); // drop any existing transform segment
  return `${head}${marker}f_jpg,q_auto,w_1200,h_630,c_fill,g_auto/${file.replace(/\.(webp|avif)$/i, ".jpg")}`;
}
