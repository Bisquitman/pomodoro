const WORK_TIME = 25; // Время работы в минутах. // 25
const BREAK_TIME = 5; // Время перерыва в минутах.  // 5
const RELAX_TIME = 20; // Время большого перерыва в минутах. // 20

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