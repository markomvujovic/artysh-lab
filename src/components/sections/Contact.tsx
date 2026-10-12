"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/content/landing";
import { cssUrl } from "@/lib/asset";

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-8 pt-section">
      <div className="relative mx-auto max-w-[1340px]">
        <div
          aria-hidden
          className="absolute inset-0 bg-size-[100%_100%] bg-no-repeat"
          style={{ backgroundImage: cssUrl("/shapes/newsletter-blob.svg") }}
        />
        <Container className="relative flex min-h-[504px] flex-col justify-center gap-10 py-16 pb-[calc(4rem+28px)] lg:flex-row lg:items-center lg:justify-between lg:py-0 lg:pb-7">
          <div className="max-w-[456px]">
            <SectionHeading align="left">{contact.title}</SectionHeading>
            <p className="mt-4 text-base">{contact.text}</p>
          </div>

          {/* Slanje forme povezujemo kada izaberemo kanal (email, Sanity…) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex h-[70px] w-full max-w-[552px] items-center rounded-full bg-yellow-light pr-2 pl-6 focus-within:ring-2 focus-within:ring-pink"
          >
            <label htmlFor="contact-input" className="sr-only">
              {contact.placeholder}
            </label>
            <input
              id="contact-input"
              name="contact"
              placeholder={contact.placeholder}
              className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-ink/60"
            />
            <Button type="submit">{contact.submit}</Button>
          </form>
        </Container>
      </div>
    </section>
  );
}
