// create initial div to add buttons

// create js function to start timer
// create js function to pause timer
// create js function to reset timer

function onButtonClick() {
  console.log("button clicked");
}

document.addEventListener("DOMContentLoaded", () => {
  const timerStart = document.querySelector(".timer_start");
  timerStart.addEventListener("click", onButtonClick);
});
