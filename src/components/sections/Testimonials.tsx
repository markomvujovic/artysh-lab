"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowRightIcon, Stars } from "@/components/ui/icons";
import type { Testimonial } from "@/content/landing";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const at = (offset: number) => items[(index + offset + count) % count];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Utisci roditelja"
      className="relative overflow-hidden pt-section"
    >
      <div className="relative px-4 sm:px-6">
        {/* Bočni utisci (umanjeni, utapaju se u belo) */}
        {count > 1 && (
          <>
            <SideTestimonial item={at(-1)} side="left" />
            <SideTestimonial item={at(1)} side="right" />
          </>
        )}

        <TestimonialBody
          key={index}
          item={at(0)}
          controls={
            count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i - 1 + count) % count)}
                  aria-label="Prethodni utisak"
                  className="rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                >
                  <ArrowRightIcon className="size-11 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i + 1) % count)}
                  aria-label="Sledeći utisak"
                  className="order-last rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
                >
                  <ArrowRightIcon className="size-11" />
                </button>
              </>
            )
          }
        />
      </div>
    </section>
  );
}

function TestimonialBody({
  item,
  controls,
}: {
  item: Testimonial;
  controls?: React.ReactNode;
}) {
  return (
    <figure className="mx-auto max-w-[552px] animate-fade-in text-center">
      <Stars rating={item.rating} className="mx-auto h-6 w-[120px]" />
      <blockquote className="mt-9 text-lead leading-[normal]">{item.quote}</blockquote>
      <div className="mt-7 flex items-center justify-center gap-[76px]">
        {controls}
        <Image
          src={item.avatar}
          alt=""
          width={64}
          height={64}
          className="size-16 rounded-full object-cover ring-[1.5px] ring-pink"
        />
      </div>
      <figcaption className="mt-6 text-base">{item.author}</figcaption>
    </figure>
  );
}

function SideTestimonial({
  item,
  side,
}: {
  item: Testimonial;
  side: "left" | "right";
}) {
  const left = side === "left";
  return (
    <div
      aria-hidden
      className={`absolute top-[27px] hidden w-[552px] origin-top scale-80 xl:block ${
        left
          ? "left-[calc(50%-617px)] -translate-x-1/2"
          : "left-[calc(50%+617px)] -translate-x-1/2"
      }`}
    >
      <TestimonialBody item={item} />
      <div
        className={`absolute inset-0 to-[86.65%] ${
          left
            ? "bg-linear-to-r from-paper to-paper/0"
            : "bg-linear-to-r from-paper/0 to-paper"
        }`}
      />
    </div>
  );
}
