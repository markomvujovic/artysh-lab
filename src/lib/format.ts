const dateFormatter = new Intl.DateTimeFormat("sr-Latn-RS", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2024-10-01" → "1. oktobar 2024." */
export function formatDate(isoDate: string) {
  return dateFormatter.format(new Date(isoDate));
}
