import type { ImageCrop } from "@/components/ui/CroppedImage";

/**
 * Statički sadržaj početne strane (tekstovi iz Figme).
 * Delovi označeni kao CMS kandidati prelaze u Sanity kada definišemo šeme.
 */

export const hero = {
  title: "Moji prvi koncerti",
  text: "Prevodimo rezultate naučnih istraživanja u interaktivne i edukativne koncerte namenjene bebama, deci i njihovim roditeljima. Za nas je igra ozbiljna stvar!",
};

export const stats = [
  { value: "10", label: "godina", icon: "/icons/growth.svg" },
  { value: "600", label: "koncerata", icon: "/icons/instrument.svg" },
  { value: "10000", label: "posetilaca", icon: "/icons/visitors.svg" },
];

export type UpcomingEvent = {
  id: string;
  title: string;
  /** ISO datum, npr. "2024-10-01" */
  date: string;
  time: string;
  location: string;
  reservationHref: string;
};

/** Privremeni podaci dok ne povežemo Sanity šemu za koncerte. */
export const placeholderEvents: UpcomingEvent[] = [
  {
    id: "1",
    title: "Baby Artysh interaktivni koncert (0-3 godine)",
    date: "2024-10-01",
    time: "10:00 i 11:30",
    location: "Beograd, Artget galerija, Trg Republike 5",
    reservationHref: "#kontakt",
  },
  {
    id: "2",
    title: "Baby Artysh interaktivni koncert (0-3 godine)",
    date: "2024-10-01",
    time: "10:00 - 10:45",
    location: "Čačak, MŠ “Dr Vojislav Vučković”, Cara Dušana 27",
    reservationHref: "#kontakt",
  },
  {
    id: "3",
    title: "Artysh Kid koncerti (3,5 - 12 godina)",
    date: "2024-10-01",
    time: "10:00 - 10:45",
    location: "Beograd, Muzej nauke i tehnike, Skenderbegova 51",
    reservationHref: "#kontakt",
  },
];

export const programs: {
  name: string;
  audience: string;
  description: string;
  image: string;
  imageCrop?: ImageCrop;
  href: string;
}[] = [
  {
    name: "Baby Artysh",
    audience: "za bebe i decu (0-3 godine)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla imperdiet egestas praesent porttitor scelerisque adipiscing.",
    image: "/images/program-baby.jpg",
    imageCrop: { x: 0.016, y: 0.1836, width: 0.8477, height: 0.7515 },
    href: "#programi",
  },
  {
    name: "Artysh Kid",
    audience: "za decu uzrasta od 3,5 do 12 godina",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla imperdiet egestas praesent porttitor scelerisque adipiscing.",
    image: "/images/program-kid.jpg",
    imageCrop: { x: 0.0403, y: 0.1884, width: 0.8477, height: 0.7515 },
    href: "#programi",
  },
  {
    name: "Baby Artysh",
    audience: "za bebe i decu (0-3 godine)",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla imperdiet egestas praesent porttitor scelerisque adipiscing.",
    image: "/images/program-baby.jpg",
    imageCrop: { x: 0.016, y: 0.1836, width: 0.8477, height: 0.7515 },
    href: "#programi",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Amet risus cras donec morbi porta neque vulputate amet laoreet.",
    author: "Lorem ipsum",
    avatar: "/images/testimonial-avatar.jpg",
    rating: 5,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Amet risus cras donec morbi porta neque vulputate amet laoreet.",
    author: "Lorem ipsum",
    avatar: "/images/testimonial-avatar.jpg",
    rating: 4,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Amet risus cras donec morbi porta neque vulputate amet laoreet.",
    author: "Lorem ipsum",
    avatar: "/images/testimonial-avatar.jpg",
    rating: 5,
  },
];

export const collaborations = {
  title: "Saradnje",
  text: "Lorem ipsum dolor sit amet consectetur. Nulla imperdiet egestas praesent porttitor scelerisque adipiscing.",
  image: "/images/saradnje.jpg",
  imageCrop: { x: 0.2127, y: 0.1058, width: 0.7786, height: 0.8467 } satisfies ImageCrop,
};

export const faq = [
  {
    question:
      "Da li nam je potrebna neka priprema za koncert za bebe? Koliko traje program?",
    answer:
      "Za koncert možete poneti prostirku za bebu ili patofnice za starije dete. Za koncert postavljamo podnu podlogu za koju se izuvamo i na njoj pratimo koncert. Program traje između 45 i 60 minuta. Detaljan opis možete videti u sekciji Programi.",
  },
  {
    question: "Da li je ograničen broj prisutnih na koncertima?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    question: "Koliko odraslih može doći na koncert sa detetom?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    question:
      "Da li su koncerti za bebe u stomaku predviđeni za oba roditelja ili samo za trudnice?",
    answer: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export const contact = {
  title: "Lorem",
  text: "Lorem ipsum dolor sit amet consectetur. Nulla imperdiet egestas praesent porttitor scelerisque",
  placeholder: "Lorem ipsum dolor sit",
  submit: "Pošalji",
};

export const navLinks = [
  { label: "O nama", href: "/o-nama" },
  { label: "Tim", href: "/o-nama#tim" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;
