type Phase = "focus" | "break";

const DURATION: Record<Phase, number> = { focus: 25 * 60, break: 5 * 60 };

const display = document.querySelector<HTMLElement>("#time")!;
const label = document.querySelector<HTMLElement>("#phase")!;
const startBtn = document.querySelector<HTMLButtonElement>("#start")!;
const resetBtn = document.querySelector<HTMLButtonElement>("#reset")!;

let phase: Phase = "focus";
let remaining = DURATION[phase];
let timer: number | undefined;

function render(): void {
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  display.textContent = `${mm}:${ss}`;
  label.textContent = phase === "focus" ? "Focus" : "Break";
  document.title = `${mm}:${ss} - ${label.textContent}`;
  startBtn.textContent = timer === undefined ? "Start" : "Pause";
}

function tick(): void {
  remaining -= 1;
  if (remaining <= 0) {
    phase = phase === "focus" ? "break" : "focus";
    remaining = DURATION[phase];
  }
  render();
}

startBtn.addEventListener("click", () => {
  if (timer === undefined) {
    timer = window.setInterval(tick, 1000);
  } else {
    window.clearInterval(timer);
    timer = undefined;
  }
  render();
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timer);
  timer = undefined;
  phase = "focus";
  remaining = DURATION[phase];
  render();
});

render();
