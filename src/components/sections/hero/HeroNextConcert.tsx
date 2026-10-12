import Image from "next/image";
import Link from "next/link";

import { BlobPhoto } from "@/components/ui/BlobPhoto";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DoubleNoteDoodle, NoteDoodle, SparkleDoodle } from "@/components/ui/doodles";
import { collaborations, hero, type UpcomingEvent } from "@/content/landing";

import { HeroStats } from "./HeroStats";

const day = new Intl.DateTimeFormat("sr-Latn-RS", { day: "numeric", timeZone: "UTC" });
const month = new Intl.DateTimeFormat("sr-Latn-RS", { month: "short", timeZone: "UTC" });

/** Opcija C: naslov + kartica sa sledećim koncertom levo, velika fotografija sa koncerta desno. */
export function HeroNextConcert({ nextEvent }: { nextEvent?: UpcomingEvent }) {
  return (
    <section className="overflow-hidden">
      <Container className="grid items-center gap-12 pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pt-20">
        <div className="min-w-0">
          <h1 className="text-display font-semibold">{hero.title}</h1>
          <p className="mt-6 max-w-[456px] text-base opacity-70">{hero.text}</p>

          {nextEvent ? (
            <NextConcertCard event={nextEvent} />
          ) : (
            <ButtonLink href="#dogadjaji" className="mt-10">
              Rezerviši
            </ButtonLink>
          )}
        </div>

        <div className="relative">
          <BlobPhoto
            src={collaborations.image}
            crop={collaborations.imageCrop}
            alt="Roditelji i deca na koncertu sede na šarenoj podlozi"
            shape="wide"
            sizes="(min-width: 1024px) 600px, 100vw"
            shadow="bg-yellow"
            priority
          />

          {/* Okrugli „stiker“ sa uzrastom */}
          <div className="absolute -top-4 left-0 flex size-28 -rotate-12 flex-col items-center justify-center rounded-full bg-pink text-center text-paper shadow-lg sm:size-32">
            <span className="text-base leading-tight font-bold">za uzrast</span>
            <span className="text-lead font-bold">0–12</span>
            <span className="text-base leading-tight font-bold">godina</span>
          </div>

          <DoubleNoteDoodle className="absolute -right-2 -bottom-6 h-14 rotate-6 text-pink sm:h-16" />
          <NoteDoodle className="absolute top-[8%] -right-3 h-10 rotate-12 text-yellow" />
          <SparkleDoodle className="absolute bottom-[18%] -left-4 size-8 text-yellow" />
        </div>
      </Container>

      <Container className="mt-20 lg:mt-28">
        <HeroStats />
      </Container>
    </section>
  );
}

function NextConcertCard({ event }: { event: UpcomingEvent }) {
  const date = new Date(event.date);
  return (
    <div className="mt-10 max-w-[520px] rounded-[32px] border-2 border-ink/10 bg-paper p-5 shadow-[8px_8px_0_var(--color-yellow)] sm:p-6">
      <p className="text-base font-bold text-pink">Sledeći koncert</p>
      <div className="mt-3 flex gap-5">
        <div className="flex size-[72px] shrink-0 flex-col items-center justify-center rounded-2xl bg-yellow-light">
          <span className="text-[28px] leading-none font-bold">{day.format(date).replace(".", "")}</span>
          <span className="text-base leading-tight">{month.format(date)}</span>
        </div>
        <div className="min-w-0">
          <h2 className="text-lead leading-tight">{event.title}</h2>
          <ul className="mt-3 space-y-1.5 text-base opacity-70">
            <li className="flex items-center gap-2">
              <Image src="/icons/clock.svg" alt="Vreme" width={20} height={20} />
              {event.time}
            </li>
            <li className="flex items-start gap-2">
              <Image src="/icons/location.svg" alt="Lokacija" width={20} height={20} className="mt-px shrink-0" />
              <span>{event.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ButtonLink href={event.reservationHref}>Rezerviši mesto</ButtonLink>
        <Link href="#dogadjaji" className="text-base font-bold underline decoration-pink decoration-2 underline-offset-4 hover:text-pink">
          Svi koncerti
        </Link>
      </div>
    </div>
  );
}
