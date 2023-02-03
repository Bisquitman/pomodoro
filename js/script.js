import { initControl } from './control.js';
import { state } from './state.js';
import { initTodo } from './todo.js';

const initPomodoro = ({workTime, breakTime, relaxTime} = {}) => {
  initControl();
  initTodo();

  state.work = workTime ?? state.work;
  state.break = breakTime ?? state.break;
  state.relax = relaxTime ?? state.relax;

  // state.activeToDo = {
  //   id: 'default',
  //   pomodoro: 2,
  //   title: 'Помодоро',
  // };
};

initPomodoro();
