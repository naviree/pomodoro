export function setBreakTimeScheme(newColor) {
  document.documentElement.style.setProperty("--main-bg-color", newColor);
  console.log("setBreakTimeScheme()");
}
