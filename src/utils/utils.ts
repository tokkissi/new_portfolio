export function splitStringIntoArray(str: string): string[] {
  return str.split(", ").map((s) => s.trim());
}
