/**
 * Prefiks putanje kada sajt ne živi na korenu domena (GitHub Pages: "/artysh-lab").
 * Next.js ga sam dodaje linkovima, ali ne i putanjama u CSS-u, pa ih pravimo ovde.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => (path.startsWith("/") ? `${basePath}${path}` : path);

/** Vrednost za `backgroundImage` / `maskImage`: cssUrl("/shapes/x.svg") → url(/artysh-lab/shapes/x.svg) */
export const cssUrl = (path: string) => `url(${asset(path)})`;
