import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/landing";

import { HeroStats } from "./hero/HeroStats";
import { cssUrl } from "@/lib/asset";

export function Hero() {
  return (
    <section>
      <Container className="relative">
        <div className="relative z-10 pt-12 lg:max-w-[552px] lg:pt-[154px]">
          <h1 className="text-display font-semibold">{hero.title}</h1>
          <p className="mt-6 max-w-[456px] text-base opacity-70">{hero.text}</p>
          <ButtonLink href="#dogadjaji" className="mt-12">
            Rezerviši
          </ButtonLink>
        </div>

        {/* Kompozicija 849×685 iz Figme: roze oblik + fotografija, pozicije u procentima */}
        <div className="relative mt-10 aspect-[849/685] w-full lg:absolute lg:top-[15px] lg:left-[360px] lg:mt-0 lg:w-[849px]">
          <div className="absolute top-[20.88%] left-[28.62%] h-[79.11%] w-[63.63%]">
            <Image src="/shapes/hero-shape.svg" alt="" fill />
          </div>
          {/* Ispod linije maske devojčica je isečena po svetlijem obliku */}
          <div
            className="absolute inset-0 mask-size-[100%_100%] mask-no-repeat"
            style={{ maskImage: cssUrl("/shapes/hero-mask.svg") }}
          >
            <div className="absolute inset-x-0 top-[2.92%] h-[81.46%]">
              <Image
                src="/images/hero-child.png"
                alt="Devojčica svira marakas"
                fill
                priority
                sizes="(min-width: 1024px) 849px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-16 lg:mt-[174px]">
        <HeroStats />
      </Container>
    </section>
  );
}
