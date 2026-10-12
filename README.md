# ArtyshLab — Moji prvi koncerti

Sajt za interaktivne i edukativne koncerte za bebe, decu i njihove roditelje.

Napravljen sa **Next.js 16** (App Router, TypeScript), **Tailwind CSS v4** i **Sanity** (Studio ugrađen na `/studio`).

## Pokretanje

```bash
npm install
cp .env.example .env.local   # pa upisati Sanity project ID
npm run dev
```

Sajt: http://localhost:3000 · Sanity Studio: http://localhost:3000/studio

### Promenljive okruženja

| Promenljiva | Opis |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID projekta sa [sanity.io/manage](https://www.sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset, podrazumevano `production` |

U Sanity projektu, pod **API → CORS origins**, treba dodati `http://localhost:3000` (i produkcioni domen) sa uključenim **Allow credentials**.

## Skripte

| Komanda | Opis |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Produkcioni build |
| `npm run start` | Pokretanje produkcionog builda |
| `npm run lint` | ESLint |

## Struktura

```
src/
  app/
    (site)/            stranice sajta (zajednički header i footer)
      opcije/hero/     privremeno: poređenje opcija hero sekcije
    studio/            ugrađeni Sanity Studio
    globals.css        dizajn tokeni (boje, tipografija, razmaci)
  components/
    layout/            Header, Footer
    sections/          sekcije početne strane
    ui/                zajedničke komponente (Button, Container, ikonice…)
  content/landing.ts   statički sadržaj početne strane (do prelaska na Sanity)
  sanity/              Sanity klijent, pomoćne funkcije i šeme
public/
  icons/  images/  shapes/   asseti izvezeni iz Figme
```

## Dizajn

Izvor dizajna je Figma fajl „ArtyshLab“. Svi tokeni su definisani u `src/app/globals.css` (`@theme`), a komponente koriste samo njih.

SVG fajlovi izvezeni iz Figme optimizuju se sa `npx svgo -r public` (podešavanja u `svgo.config.mjs` čuvaju `viewBox`).
