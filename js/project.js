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

let timerValue = 25;
let timerInterval = null;

timerStart.addEventListener("click", function () {
  if (timerInterval === null) {
    timerInterval = setInterval(function () {
      timerValue--;
      timerMinutes.innerHTML = timerValue;
    }, 60000);
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
