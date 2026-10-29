import type { NextConfig } from "next";

const apiOrigin = new URL(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000").origin;
// Dev me port badalne par bhi CSP block na ho — env origin + common dev ports.
const apiOrigins = Array.from(
  new Set([apiOrigin, "http://localhost:5000", "http://localhost:5001", "http://localhost:5003"])
).join(" ");
const isProd = process.env.NODE_ENV === "production";
const scriptSrcEval = isProd ? "" : " 'unsafe-eval'";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'${scriptSrcEval} https://checkout.razorpay.com https://*.razorpay.com https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https:",
  "media-src 'self' https://res.cloudinary.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self' ${apiOrigins} https://res.cloudinary.com https://*.razorpay.com https://api.postalpincode.in https://api.zippopotam.us https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com`,
  "frame-src https://*.razorpay.com https://checkout.razorpay.com https://maps.google.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  isProd ? "frame-ancestors 'self'" : "frame-ancestors *",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  ...(isProd ? [{ key: "X-Frame-Options", value: "SAMEORIGIN" }] : []),
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // Without this, dev mode loads whole icon packs (react-icons/pi alone is ~1.3 MB) and bloats TBT.
  experimental: {
    optimizePackageImports: [
      "react-icons/bi",
      "react-icons/bs",
      "react-icons/fa",
      "react-icons/fa6",
      "react-icons/fi",
      "react-icons/gi",
      "react-icons/hi",
      "react-icons/io5",
      "react-icons/lu",
      "react-icons/md",
      "react-icons/pi",
      "react-icons/ri",
      "react-icons/tb",
      "lucide-react",
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [25, 50, 75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      // Add Pexels
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL.replace(/\/api\/v1\/?$/, "")
      : "http://localhost:5000";
    return [
      {
        source: "/api/v1/:path*",
        destination: `${backendUrl}/api/v1/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
