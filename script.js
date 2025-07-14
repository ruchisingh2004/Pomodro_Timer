let time = 1500;
let timer;
let isRunning = false;

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
      }
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  isRunning = false;
  updateDisplay();
}

updateDisplay();
