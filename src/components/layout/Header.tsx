import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/content/landing";

export function Header() {
  return (
    <header className="relative z-10 pt-[21px]">
      <Container className="grid grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="ArtyshLab — početna">
          <Image src="/icons/logo.svg" alt="ArtyshLab" width={50} height={55} priority />
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden md:block">
          <ul className="flex gap-10 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-pink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href="/#kontakt" variant="outline" className="justify-self-end">
          Kontakt
        </ButtonLink>
      </Container>
    </header>
  );
}
