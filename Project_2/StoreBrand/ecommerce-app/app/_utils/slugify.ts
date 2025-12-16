export function toSlug(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s\_]+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
