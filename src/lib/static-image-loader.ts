import { asset } from "./asset";

/**
 * Loader za statički export (GitHub Pages): nema servera za optimizaciju slika,
 * pa vraćamo originalni fajl sa prefiksom putanje.
 */
export default function staticImageLoader({ src }: { src: string; width: number; quality?: number }) {
  return asset(src);
}
