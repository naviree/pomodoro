import { setBreakTimeScheme } from "./breakTimer.js";

const timerStart = document.querySelector(".timer_start");
const pauseTimer = document.querySelector(".timer_pause");
const resetTimer = document.querySelector(".timer_reset");
const timerMinutes = document.querySelector(".timer_minutes");
const timerSeconds = document.querySelector(".timer_seconds");

let minuteValue = 25;
let secondValue = 0;
let timerInterval = null;

function updateTimerDisplay(minutes, seconds) {
  timerMinutes.textContent = String(minutes).padStart(2, "0");
  timerSeconds.textContent = String(seconds).padStart(2, "0");
}
function decrementTimer() {
  if (secondValue === 0) {
    if (minuteValue > 0) {
      minuteValue--;
      secondValue = 59;
    } else {
      stopTimer();
      // Optionally trigger any other action when timer ends
      // timerEndAction();
      return;
    }
  } else {
    secondValue--;
  }
  updateTimerDisplay(minuteValue, secondValue);
}

function startTimer() {
  if (timerInterval === null) {
    timerInterval = setInterval(decrementTimer, 1000); // set this to 1000 for 1 second
    timerStart.textContent = "Pause";
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerStart.textContent = "Start";
}

function resetTimerFunction() {
  stopTimer();
  minuteValue = 25;
  secondValue = 0;
  updateTimerDisplay(minuteValue, secondValue);
}

// Start/Pause button event listener
timerStart.addEventListener("click", () => {
  if (timerInterval === null) {
    startTimer();
  } else {
    stopTimer();
  }
});

// Reset button event listener
resetTimer.addEventListener("click", resetTimerFunction);

updateTimerDisplay(minuteValue, secondValue); // Initialize display
