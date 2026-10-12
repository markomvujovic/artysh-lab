import Link from "next/link";

import { buttonClasses } from "@/components/ui/Button";
import { CroppedImage } from "@/components/ui/CroppedImage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs } from "@/content/landing";
import { cssUrl } from "@/lib/asset";

type Program = (typeof programs)[number];

export function Programs() {
  return (
    <section id="programi" className="scroll-mt-8 pt-section">
      <Container>
        <SectionHeading>Programi</SectionHeading>
        <ul className="mt-heading grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <li key={i}>
              <ProgramCard program={program} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Na uređajima bez hovera (telefoni) kartica je uvek u otvorenom stanju. */
const showOnHover =
  "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100";
const hideOnHover =
  "transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 [@media(hover:none)]:opacity-0";

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group relative mx-auto aspect-[360/476] w-full max-w-[360px]">
      {/* Roze senka iza kartice */}
      <div
        aria-hidden
        className="absolute top-[2.73%] left-[3.23%] h-[97.27%] w-[96.77%] bg-size-[100%_100%] bg-no-repeat"
        style={{ backgroundImage: cssUrl("/shapes/program-blob-shadow.svg") }}
      />

      {/* Fotografija isečena u oblik bloba */}
      <div
        className="absolute top-0 left-0 h-[97.27%] w-[96.77%] overflow-hidden mask-size-[100%_100%] mask-no-repeat"
        style={{ maskImage: cssUrl("/shapes/program-blob.svg") }}
      >
        <CroppedImage
          src={program.image}
          alt=""
          crop={program.imageCrop}
          sizes="(min-width: 1024px) 410px, (min-width: 640px) 60vw, 120vw"
        />

        {/* Figma: gradijent 80% crne odozdo; u otvorenom stanju još 70% crne preko */}
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/[0.675] to-transparent to-[33.2%]" />
        <div aria-hidden className={`absolute inset-0 bg-ink/70 ${showOnHover}`} />

        {/* Zatvoreno stanje: naziv na dnu */}
        <h3
          className={`absolute inset-x-0 bottom-[11.3%] px-[42px] text-center text-lead leading-[normal] text-paper ${hideOnHover}`}
        >
          <span className="block">{program.name}</span>
          <span className="block">{program.audience}</span>
        </h3>

        {/* Otvoreno stanje: naziv, opis i dugme */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-between px-[42px] pt-[44px] pb-[42px] text-center text-paper ${showOnHover}`}
        >
          <p aria-hidden className="text-lead leading-[normal]">
            <span className="block">{program.name}</span>
            <span className="block">{program.audience}</span>
          </p>
          <p className="text-base">{program.description}</p>
          <Link href={program.href} className={buttonClasses("primary")}>
            Detaljnije
            <span className="sr-only"> o programu {program.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
