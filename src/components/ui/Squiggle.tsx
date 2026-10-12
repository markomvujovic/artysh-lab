import { cssUrl } from "@/lib/asset";

/** Talasasta razdelna linija između redova liste. */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-1.5 w-full bg-size-[100%_100%] bg-no-repeat ${className}`}
      style={{ backgroundImage: cssUrl("/shapes/squiggle.svg") }}
    />
  );
}
