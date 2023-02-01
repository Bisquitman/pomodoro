import { alarm } from './alarm.js';
import { changeActiveBtn } from './control.js';
import { state } from './state.js';

const timeMinutes = document.querySelector('.time__minutes');
const timeSeconds = document.querySelector('.time__seconds');

export const showTime = (seconds) => {
  timeMinutes.textContent =
    Math.floor(seconds / 60) < 10
      ? '0' + Math.floor(seconds / 60)
      : Math.floor(seconds / 60);
  timeSeconds.textContent = 
    seconds % 60 < 10 
      ? '0' + (seconds % 60)
      : seconds % 60;
};

export const startTimer = () => {
  state.timeLeft -= 1;

  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  }

  if (state.timeLeft <= 0) {
    // alarm();
    console.log(state.activeToDo);

    if (state.status === 'work') {
      state.activeToDo.pomodoro += 1;

      if (state.activeToDo.pomodoro % state.count !== 0) {
        state.status = 'break';
      } else {
        state.status = 'relax';
      }      
    } else {
      state.status = 'work';
    }

    state.timeLeft = state[state.status] * 60;

    alarm();
    changeActiveBtn(state.status);
    startTimer();
  }
};
