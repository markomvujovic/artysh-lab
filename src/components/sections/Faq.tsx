"use client";

import { useId, useState } from "react";

import { Container } from "@/components/ui/Container";
import { FaqToggleIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Squiggle } from "@/components/ui/Squiggle";

type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-8 pt-section">
      <Container>
        <SectionHeading>Često postavljana pitanja</SectionHeading>
      </Container>

      <Container size="narrow" className="mt-heading">
        <Squiggle />
        <ul>
          {items.map((item, i) => {
            const open = openIndex === i;
            const panelId = `${baseId}-${i}`;
            return (
              <li key={item.question}>
                <div className="py-8">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="group flex w-full items-center justify-between gap-6 text-left"
                    >
                      <span
                        className={`max-w-[744px] text-lead leading-[normal] transition-opacity duration-350 ease-smooth group-hover:opacity-100 ${
                          open ? "" : "opacity-40"
                        }`}
                      >
                        {item.question}
                      </span>
                      <FaqToggleIcon open={open} className="size-11 shrink-0" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    inert={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-350 ease-smooth motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[552px] pt-3.5 text-base opacity-70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
                <Squiggle />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
