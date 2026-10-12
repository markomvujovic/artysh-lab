import type { NextConfig } from "next";

/*
 * STATIC_EXPORT=true pravi statičku verziju sajta u `out/` (za GitHub Pages).
 * Bez nje (lokalno, Vercel) sajt radi kao standardna Next.js aplikacija.
 */
const staticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // Partial Prerendering zahteva server, pa ga statički export isključuje
  cacheComponents: !staticExport,
  partialPrefetching: !staticExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(staticExport && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: {
      loader: "custom",
      loaderFile: "./src/lib/static-image-loader.ts",
    },
  }),
};

export default nextConfig;
