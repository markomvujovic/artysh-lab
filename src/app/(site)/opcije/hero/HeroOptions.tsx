import type { Metadata } from "next";
import Link from "next/link";

import { Hero } from "@/components/sections/Hero";
import { HeroCollage } from "@/components/sections/hero/HeroCollage";
import { HeroNextConcert } from "@/components/sections/hero/HeroNextConcert";
import { placeholderEvents } from "@/content/landing";

/* Privremene stranice za poređenje opcija hero sekcije (/opcije/hero/a|b|c). Brišemo ih kada izaberemo jednu. */

const variants = {
  a: { label: "Figma", render: () => <Hero /> },
  b: { label: "Kolaž", render: () => <HeroCollage /> },
  c: { label: "Sledeći koncert", render: () => <HeroNextConcert nextEvent={placeholderEvents[0]} /> },
};

type Variant = keyof typeof variants;

export const metadata: Metadata = { title: "Hero opcije", robots: { index: false } };

export function HeroOptions({ current }: { current: Variant }) {
  return (
    <>
      {variants[current].render()}

      <nav
        aria-label="Opcije hero sekcije"
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-ink p-1.5 text-base shadow-xl"
      >
        {(Object.keys(variants) as Variant[]).map((key) => (
          <Link
            key={key}
            href={`/opcije/hero/${key}`}
            aria-current={key === current ? "page" : undefined}
            className={`rounded-full px-4 py-2 whitespace-nowrap transition-colors ${
              key === current ? "bg-yellow font-bold text-ink" : "text-paper hover:bg-paper/15"
            }`}
          >
            {key.toUpperCase()}
            <span className="hidden sm:inline"> · {variants[key].label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
