import { alarm } from './alarm.js';
import { changeActiveBtn } from './control.js';
import { state } from './state.js';
import { showTodo, updateTodo } from './todo.js';

const timeMinutes = document.querySelector('.time__minutes');
const timeSeconds = document.querySelector('.time__seconds');

export const showTime = (seconds) => {
  timeMinutes.textContent =
    Math.floor(seconds / 60) < 10
      ? '0' + Math.floor(seconds / 60)
      : Math.floor(seconds / 60);
  timeSeconds.textContent =
    seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;
};

const title = document.title;

export const startTimer = () => {
  const countdown = new Date().getTime() + state.timeLeft * 1000;

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    showTime(state.timeLeft);

    document.title = state.timeLeft;

    if (!(state.timeLeft % 5)) {
      const now = new Date().getTime();
      state.timeLeft = Math.floor((countdown - now) / 1000);
    }

    if (state.timeLeft > 0 && state.isActive) {
      return;
    }

    document.title = title;
    clearTimeout(state.timerId);
console.log('state:',state);
    if (state.status === 'work') {
      state.activeTodo.pomodoro += 1;
      updateTodo(state.activeTodo);

      if (state.activeTodo.pomodoro % state.count) {
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
    showTodo();
    startTimer();
  }, 1000);
};
