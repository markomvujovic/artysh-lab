import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Squiggle } from "@/components/ui/Squiggle";
import type { UpcomingEvent } from "@/content/landing";
import { formatDate } from "@/lib/format";

export function UpcomingEvents({ events }: { events: UpcomingEvent[] }) {
  return (
    <section id="dogadjaji" className="scroll-mt-8 pt-section">
      <Container>
        <SectionHeading>Predstojeći događaji</SectionHeading>

        <div className="mt-heading">
          <Squiggle />
          {events.length === 0 ? (
            <p className="py-8 text-center text-lead opacity-70">
              Trenutno nema zakazanih koncerata.
            </p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lead leading-tight md:leading-[22px]">{event.title}</h3>
                      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-base opacity-70">
                        <EventMeta icon="/icons/calendar.svg" label="Datum">
                          {formatDate(event.date)}
                        </EventMeta>
                        <EventMeta icon="/icons/clock.svg" label="Vreme">
                          {event.time}
                        </EventMeta>
                        <EventMeta icon="/icons/location.svg" label="Lokacija">
                          {event.location}
                        </EventMeta>
                      </ul>
                    </div>
                    <ButtonLink href={event.reservationHref} className="self-start md:self-auto">
                      Rezerviši
                    </ButtonLink>
                  </div>
                  <Squiggle />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}

function EventMeta({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-2">
      <Image src={icon} alt={label} width={24} height={24} className="shrink-0" />
      <span className="pt-px">{children}</span>
    </li>
  );
}
