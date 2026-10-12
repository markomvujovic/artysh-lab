import { Collaborations } from "@/components/sections/Collaborations";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Testimonials } from "@/components/sections/Testimonials";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";
import { faq, placeholderEvents, testimonials } from "@/content/landing";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* TODO: zameniti podacima iz Sanity-ja kada definišemo šemu za koncerte */}
      <UpcomingEvents events={placeholderEvents} />
      <Programs />
      <Testimonials items={testimonials} />
      <Collaborations />
      <Faq items={faq} />
      <Contact />
    </>
  );
}
