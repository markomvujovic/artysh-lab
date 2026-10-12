import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // CDN keširan odgovor; Next.js revalidacija kontroliše svežinu podataka
  useCdn: true,
});
