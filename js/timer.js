const timerStart = document.querySelector(".timer_start");
const pauseTimer = document.querySelector(".timer_pause");
const resetTimer = document.querySelector(".timer_reset");
const timerMinutes = document.querySelector(".timer_minutes");
const timerSeconds = document.querySelector(".timer_seconds");
const pomodoro = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short__break');
const longBreak = document.querySelector('.long__break');


let minuteValue = 25;
let secondValue = 0;
let timerInterval = null;
let studyTimeCounter = 0;
let isStudyTimer = true;

let container = document.querySelector('.container');

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

    } else {
        minuteValue = 5;
        isStudyTimer = true;
    }
    secondValue = 0;
    updateTimerDisplay(minuteValue, secondValue);
}

function longBreakSwitchTimer() {
    if (isStudyTimer) {
        minuteValue = 15;
        isStudyTimer = false;

    } else {
        minuteValue = 15;
        isStudyTimer = true;
    }
    secondValue = 0;
    updateTimerDisplay(minuteValue, secondValue);
}

function resetTimerFunction() {
    stopTimer();
    minuteValue = 25;
    secondValue = 0;
    updateTimerDisplay(minuteValue, secondValue);
}

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
    minuteValue = 5;
    secondValue = 0;
    updateTimerDisplay(minuteValue, secondValue);
    startTimer();
}

function longBreakTimer() {
    console.log("hello world")
    minuteValue = 15;
    secondValue = 0;
    updateTimerDisplay(minuteValue, secondValue);
    startTimer();
}

timerMinutes.addEventListener("click", () => {
    const newMinutes = prompt("Enter the new number of minutes:");

    if (newMinutes !== null && !isNaN(newMinutes) && newMinutes >= 0) {
        minuteValue = parseInt(newMinutes);
        updateTimerDisplay(minuteValue, secondValue);

        if (timerInterval !== null) {
            stopTimer();
            startTimer();
        }
    } else {
        alert("Invalid input. Please enter a valid number of minutes.");
    }
});

pomodoro.addEventListener("click", () => {
    resetTimerFunction();
    document.body.style.backgroundColor = "#ffc2cd";
    container.style.backgroundColor = ('#ff6289');
})

shortBreak.addEventListener("click", () => {
    switchTimer();
    document.body.style.backgroundColor = "#8ecae6";
    container.style.backgroundColor = "#219ebc";
})

longBreak.addEventListener("click", () => {

    longBreakSwitchTimer();
    document.body.style.backgroundColor = "#559CAD";
    container.style.backgroundColor = "#4A5899";
});
// Reset button event listener

resetTimer.addEventListener("click", resetTimerFunction);

updateTimerDisplay(minuteValue, secondValue); // Initialize display
