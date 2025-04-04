import wooshUrl from '../assets/sounds/woosh.mp3';
const woosh = new Audio(wooshUrl);
woosh.volume = 0.1;

const switchSurprise = () => {
  if (
    !glasses.classList.contains('glasses-anim') &&
    !beard.classList.contains('beard-anim')
  ) {
    glasses.classList.add('glasses-anim');
    playWoosh();
  } else if (
    glasses.classList.contains('glasses-anim') &&
    !beard.classList.contains('beard-anim')
  ) {
    glasses.classList.remove('glasses-anim');
    beard.classList.add('beard-anim');
    playWoosh();
  } else {
    glasses.classList.remove('glasses-anim');
    beard.classList.remove('beard-anim');
  }
};

const playWoosh = () => {
  woosh.pause();
  woosh.currentTime = 0;
  woosh.play();
};

export const initSurprise = () => {
  const glasses = document.getElementById('glasses');
  glasses.addEventListener('click', switchSurprise);

  const beard = document.getElementById('beard');
  beard.addEventListener('click', switchSurprise);

  const me = document.getElementById('me-image');
  me.addEventListener('click', switchSurprise);
};
