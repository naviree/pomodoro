let isBreakTime = false;
const breakTimerMinutes = 5;

export function changeBackgroundColor(newColor) {
  document.documentElement.style.setProperty("--main-bg-color", newColor);
  console.log("changeBackgroundColor()");
}
