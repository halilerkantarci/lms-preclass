const pause = document.getElementById("pause");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const timerDisplay = document.getElementById("timerDisplay");
let loop;
let millisecond = 0,
  second = 0,
  minute = 0,
  hour = 0;

start.addEventListener("click", () => {
  clearInterval(loop); // starta bastıktan sonra tekrar basarken hızlanıyodu. Böylece önüne geçtik
  loop = setInterval(counter, 10);
});

pause.addEventListener("click", () => {
  clearInterval(loop);
});

reset.addEventListener("click", () => {
  clearInterval(loop);
  (millisecond = 0), (second = 0), (minute = 0), (hour = 0);
  timerDisplay.innerHTML = "00 : 00 : 00 : 000";
});

function counter() {
  millisecond += 10;
  if (millisecond == 1000) {
    millisecond = 0;
    second += 1;
    if (second == 60) {
      second = 0;
      minute += 1;
      if (minute == 60) {
        minute = 0;
        hour += 1;
      }
    }
  }
  timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
}
