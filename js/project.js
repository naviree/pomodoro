// create initial div to add buttons

// create js function for buttons

// add event listener to start timer
// listen for minutes and seconds

// add event listener to pause timer
// pause the time when clicked and resume when clicked again

// add event listener to reset timer
// reset the timer to 25:00

const timerStart = document.querySelector(".timer_start");
const pauseTimer = document.querySelector(".timer_pause");
const resetTimer = document.querySelector(".timer_reset");
const timerMinutes = document.querySelector(".timer_minutes");
const timerSeconds = document.querySelector(".timer_seconds");

let minuteValue = 25;
let timerInterval = null;

timerStart.addEventListener("click", () => {
  if (timerInterval === null) {
    timerInterval = setInterval(() => {
      if (minuteValue > 0) {
        minuteValue--;
        timerMinutes.textContent = minuteValue;
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        // Optionally trigger any other action when timer ends
        // timerEndAction();
      }
    }, 60000); // set this to 60000 for 1 minute
    timerPausedOnClick();
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

function timerPausedOnClick() {
  pauseTimer.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    console.log("timer paused");
  });
}

resetTimer.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
  minuteValue = 25;
  timerMinutes.innerHTML = minuteValue;
  console.log("timer reset");
});
