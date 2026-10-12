import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CroppedImage } from "@/components/ui/CroppedImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collaborations } from "@/content/landing";
import { cssUrl } from "@/lib/asset";

export function Collaborations() {
  return (
    <section className="pt-section">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[120px]">
        <div className="lg:w-[360px] lg:shrink-0">
          <SectionHeading align="left">{collaborations.title}</SectionHeading>
          <p className="mt-6 text-base opacity-70">{collaborations.text}</p>
          <ButtonLink href="#kontakt" variant="outline" className="mt-12">
            Kontakt
          </ButtonLink>
        </div>

        <div className="relative aspect-[648/492] w-full">
          <div
            aria-hidden
            className="absolute top-[3.11%] left-[2.27%] h-[96.89%] w-[97.73%] bg-size-[100%_100%] bg-no-repeat"
            style={{ backgroundImage: cssUrl("/shapes/saradnje-blob-shadow.svg") }}
          />
          <div
            className="absolute top-0 left-0 h-[96.89%] w-[97.73%] overflow-hidden mask-size-[100%_100%] mask-no-repeat"
            style={{ maskImage: cssUrl("/shapes/saradnje-blob.svg") }}
          >
            <CroppedImage
              src={collaborations.image}
              alt="Roditelji i deca na koncertu sede na šarenoj podlozi"
              crop={collaborations.imageCrop}
              sizes="(min-width: 1024px) 820px, 130vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
