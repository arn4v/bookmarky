export const isSsr = typeof window === "undefined";

export const isProd = process.env.NODE_ENV === "production";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (isProd ? "https://bookmarky.io" : "http://localhost:3000");