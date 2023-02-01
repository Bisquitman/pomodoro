const WORK_TIME = 3; // Время работы в минутах.
const BREAK_TIME = 1; // Время перерыва в минутах.
const RELAX_TIME = 2; // Время большого перерыва в минутах.

export const state = {
  work: WORK_TIME,
  break: BREAK_TIME,
  relax: RELAX_TIME,
  status: 'work',
  count: 4,
  timeLeft: WORK_TIME * 60,
  isActive: false,
  timerId: 0,
};