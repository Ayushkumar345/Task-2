let startTime = 0, elapsed = 0, timerInterval = null, isRunning = false;

function updateDisplay() {
  const current = Date.now() - startTime + elapsed;
  const ms = Math.floor((current % 1000) / 10);
  const sec = Math.floor((current / 1000) % 60);
  const min = Math.floor((current / 60000) % 60);

  document.getElementById("display").textContent =
    `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(ms).padStart(2, "0")}`;
}

function startStop() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  timerInterval = setInterval(updateDisplay, 10);
}

function pause() {
  if (!isRunning) return;
  elapsed += Date.now() - startTime;
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsed = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!isRunning) return;
  const lapTime = document.getElementById("display").textContent;
  const lapEl = document.createElement("div");
  lapEl.textContent = `➤ ${lapTime}`;
  document.getElementById("laps").appendChild(lapEl);
}
