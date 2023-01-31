import { alarm } from './alarm.js';
import { state } from './state.js';

const timeMinutes = document.querySelector('.time__minutes');
const timeSeconds = document.querySelector('.time__seconds');

const showTime = (seconds) => {
  timeMinutes.textContent =
    Math.floor(seconds / 60) >= 10
      ? Math.floor(seconds / 60)
      : '0' + Math.floor(seconds / 60);
  timeSeconds.textContent = 
    seconds % 60 >= 10 
      ? seconds % 60 
      : '0' + (seconds % 60);
};

export const startTimer = () => {
  state.timeLeft--;
  console.log('state.timeLeft: ', state.timeLeft);

  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  }

  if (state.timeLeft <= 0) {
    alarm();
  }
};
