export function scrollToSkills() {
  const skillCardElement = document.getElementById("skills");
  if (skillCardElement) {
    skillCardElement.scrollIntoView({ behavior: "smooth" });
  }
}
