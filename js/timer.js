const timerStart = document.querySelector(".timer_start");
const pauseTimer = document.querySelector(".timer_pause");
const resetTimer = document.querySelector(".timer_reset");
const timerMinutes = document.querySelector(".timer_minutes");
const timerSeconds = document.querySelector(".timer_seconds");
// const cancelTimer = document.querySelector(".timer_cancel");

let minuteValue = 25;
let secondValue = 0;
let timerInterval = null;
let studyTimeCounter = 0;

let isStudyTimer = true;

function updateTimerDisplay(minutes, seconds) {
	timerMinutes.textContent = String(minutes).padStart(2, "0");
	timerSeconds.textContent = String(seconds).padStart(2, "0");
}

function incrementStudyTimeCounter() {
	studyTimeCounter += 1;
	console.log(studyTimeCounter);
	localStorage.setItem("studyTimeCounter", studyTimeCounter);
}

function decrementTimer() {
	if (secondValue === 0) {
		if (minuteValue > 0) {
			minuteValue--;
			secondValue = 59;
		} else {
			stopTimer();
			breakTimer();
			return;
		}
	} else {
		secondValue--;
	}
	updateTimerDisplay(minuteValue, secondValue);
}

function startTimer() {
	if (timerInterval === null) {
		incrementStudyTimeCounter();
		timerInterval = setInterval(decrementTimer, 1000); // set this to 1000 for 1 second
		timerStart.textContent = "Pause";
	}
}

function stopTimer() {
	clearInterval(timerInterval);
	timerInterval = null;
	timerStart.textContent = "Start";
}

function switchTimer() {
	if (isStudyTimer) {
		minuteValue = 5;
		isStudyTimer = false;
		changeBackgroundColor("blue");
		changeMiddleColor("lightblue");
		changeTimerColor("white");
	} else {
		minuteValue = 1;
		isStudyTimer = true;
	}
	secondValue = 0;
	updateTimerDisplay(minuteValue, secondValue);
}

function cancelTimerFunction() {
	stopTimer();
	switchTimer();
	updateTimerDisplay(minuteValue, secondValue);
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

resetTimer.addEventListener("click", () => {
	stopTimer();
	resetTimerFunction();
});

function breakTimer() {
	console.log("breakTimer");
	changeBackgroundColor("blue");
	changeMiddleColor("lightblue");
	changeTimerColor("white");
	minuteValue = 5;
	secondValue = 0;
	updateTimerDisplay(minuteValue, secondValue);
	startTimer();
}

// Add an event listener to the timerMinutes element
timerMinutes.addEventListener("click", () => {
	// Prompt the user for a new value for minutes
	const newMinutes = prompt("Enter the new number of minutes:");

	// Validate the input
	if (newMinutes !== null && !isNaN(newMinutes) && newMinutes >= 0) {
		// Update the minuteValue and update the display
		minuteValue = parseInt(newMinutes);
		updateTimerDisplay(minuteValue, secondValue);

		// If the timer is running, restart it with the new minutes
		if (timerInterval !== null) {
			stopTimer();
			startTimer();
		}
	} else {
		// Handle invalid input or cancelation
		alert("Invalid input. Please enter a valid number of minutes.");
	}
});

// Reset button event listener
resetTimer.addEventListener("click", resetTimerFunction);

updateTimerDisplay(minuteValue, secondValue); // Initialize display
