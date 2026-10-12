import { BlobPhoto } from "@/components/ui/BlobPhoto";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DoubleNoteDoodle, NoteDoodle, SparkleDoodle, WaveDoodle } from "@/components/ui/doodles";
import { collaborations, hero, programs } from "@/content/landing";

import { HeroStats } from "./HeroStats";

/** Opcija B: centriran naslov, ispod kolaž fotografija sa koncerata i muzički „stikeri“. */
export function HeroCollage() {
  const [baby, kid] = programs;

  return (
    <section className="overflow-hidden">
      <Container className="relative pt-16 text-center lg:pt-24">
        <SparkleDoodle className="absolute top-20 left-[6%] hidden size-8 text-yellow md:block" />
        <NoteDoodle className="absolute top-40 right-[8%] hidden h-12 -rotate-12 text-pink md:block" />

        <p className="inline-flex items-center gap-2 rounded-full bg-yellow-light px-5 py-2 text-base font-bold">
          <NoteDoodle className="h-5 text-pink" />
          Interaktivni koncerti za bebe i decu od 0 do 12 godina
        </p>
        <h1 className="mx-auto mt-6 max-w-[880px] text-display font-semibold">{hero.title}</h1>
        <p className="mx-auto mt-6 max-w-[560px] text-base opacity-70">{hero.text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#dogadjaji">Rezerviši</ButtonLink>
          <ButtonLink href="#programi" variant="outline">
            Pogledaj programe
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-16 lg:mt-20">
        <div className="relative grid grid-cols-[1fr_1.45fr_1fr] items-center gap-3 sm:gap-6">
          <BlobPhoto
            src={baby.image}
            crop={baby.imageCrop}
            alt="Beba sa mamom na koncertu"
            shape="tall"
            sizes="(min-width: 1024px) 330px, 30vw"
            shadow="bg-yellow"
            className="-rotate-6"
          />
          <BlobPhoto
            src={collaborations.image}
            crop={collaborations.imageCrop}
            alt="Roditelji i deca na koncertu sede na šarenoj podlozi"
            shape="wide"
            sizes="(min-width: 1024px) 480px, 45vw"
            priority
            className="z-10"
          />
          <BlobPhoto
            src={kid.image}
            crop={kid.imageCrop}
            alt="Devojčica pleše uz muziku"
            shape="tall"
            sizes="(min-width: 1024px) 330px, 30vw"
            shadow="bg-yellow"
            className="rotate-6"
          />

          <DoubleNoteDoodle className="absolute -top-6 left-[30%] z-20 h-12 -rotate-6 text-pink sm:h-16" />
          <SparkleDoodle className="absolute right-[30%] -bottom-4 z-20 size-8 text-yellow sm:size-10" />
          <WaveDoodle className="absolute -top-10 right-[8%] z-20 hidden w-20 text-pink md:block" />
        </div>
      </Container>

      <Container className="mt-20 lg:mt-24">
        <HeroStats />
      </Container>
    </section>
  );
}
