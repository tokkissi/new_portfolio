export function splitStringIntoArray(str: string): string[] {
  return str.split(", ").map((s) => s.trim());
}

export function scrollToElementById(id: string) {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView();
  }
}
