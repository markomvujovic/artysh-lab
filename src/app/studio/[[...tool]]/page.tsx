import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export { metadata, viewport } from "next-sanity/studio";

// Studio je jedna stranica; svoje pod-rute rešava sam u pregledaču.
export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <NextStudio config={config} />;
}
