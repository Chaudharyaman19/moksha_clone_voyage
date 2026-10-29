// Adds Cloudinary delivery transforms (auto format/quality + max width) to CSS background images, which bypass next/image.
export function optimizeCloudinary(url: string, width: number): string {
  const marker = "/image/upload/";
  if (!url.includes("res.cloudinary.com") || !url.includes(marker)) return url;
  const [head, rest] = url.split(marker);
  if (!/^v\d+\//.test(rest)) return url; // already has transforms
  return `${head}${marker}f_auto,q_auto,w_${width}/${rest}`;
}
