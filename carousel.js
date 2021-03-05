/*
 *
 *  Setup elements.
 *
 */
const track = document.querySelector('.track');
const slides = Array.from(track.children);

const upBtn = document.querySelector('.carousel .up-btn');
const downBtn = document.querySelector('.carousel .down-btn');

const nav = document.querySelector('.carousel .nav');
const dots = Array.from(nav.children);

// Setup slide positions.
const setSlidePosition = (slide, index) => {
  slide.style.top = 'calc( 50% + calc( 800px * ' + index + ' ) )';
}
slides.forEach(setSlidePosition);



/* 
 * 
 * Setup functions for the event listeners.
 *
 */
const moveToSlide = (track, currentSlide, targetSlide) => {

  track.style.transform = 'translateY( calc( -1 * ' + targetSlide.style.top + ' + 50%))';

  currentSlide.classList.remove('active');
  targetSlide.classList.add('active');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('active');
  targetDot.classList.add('active');
}

const hideShowArrows = (slides, upBtn, downBtn, targetIndex) => {

  if (targetIndex === 0) {
    upBtn.classList.add('is-hidden');
    downBtn.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    upBtn.classList.remove('is-hidden');
    downBtn.classList.add('is-hidden');
  } else {
    upBtn.classList.remove('is-hidden');
    downBtn.classList.remove('is-hidden');
  }
}



/*
 *
 * Setup event listeners.
 *
 */
upBtn.addEventListener('click', () => {
  
  const currentSlide = track.querySelector('.slide.active');
  const previousSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, previousSlide);

  const currentDot = nav.querySelector('.dot.active');
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = slides.findIndex(dot => dot === previousSlide)
  
  updateDots(currentDot, previousDot)
  hideShowArrows(slides, upBtn, downBtn, previousIndex)
});

downBtn.addEventListener('click', () => {
  
  const currentSlide = track.querySelector('.slide.active');
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
  
  const currentDot = nav.querySelector('.dot.active');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(dot => dot === nextSlide)

  updateDots(currentDot, nextDot)
  hideShowArrows(slides, upBtn, downBtn, nextIndex)
});

nav.addEventListener('click', e => {

  const targetDot = e.target;
  if (!targetDot) return;

  const currentSlide = track.querySelector('.slide.active');
  const currentDot = nav.querySelector('.dot.active');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, upBtn, downBtn, targetIndex)
});
