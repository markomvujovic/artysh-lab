import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/icons";
import { navLinks, socialLinks } from "@/content/landing";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  return (
    <footer className="pt-section pb-section">
      <Container>
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[1fr_auto_1fr] md:px-12">
          <div className="text-center md:text-left">
            <p className="text-lead">ArtyshLab</p>
            <p className="mt-[11px] text-base opacity-70">All rights reserved</p>
          </div>

          <nav aria-label="Navigacija u podnožju">
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

          <ul className="flex gap-4 md:justify-self-end">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-[52px] items-center justify-center rounded-full bg-pink/80 text-paper transition-colors hover:bg-pink"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
