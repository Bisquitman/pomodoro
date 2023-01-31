const audio = new Audio('./audio/wave2.mp3');

export const alarm = () => {
  audio.play();
};