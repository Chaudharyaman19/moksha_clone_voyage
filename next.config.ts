import type { NextConfig } from "next";

const apiOrigin = new URL(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000").origin;
const isProd = process.env.NODE_ENV === "production";
const scriptSrcEval = isProd ? "" : " 'unsafe-eval'";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${scriptSrcEval} https://checkout.razorpay.com https://*.razorpay.com https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "media-src 'self' https://res.cloudinary.com",
  "font-src 'self' data:",
  `connect-src 'self' ${apiOrigin} https://res.cloudinary.com https://*.razorpay.com https://api.postalpincode.in https://api.zippopotam.us https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com`,
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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: {
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
};

export default nextConfig;
