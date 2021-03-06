let sliderImages = document.querySelectorAll('.slide'),
  arrowLeft = document.querySelector('#arrow-left'),
  arrowRight = document.querySelector('#arrow-right'),
  current = 0;
const reset = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
};
// initialize the slider

const startSlide = () => {
  reset();
  sliderImages[0].style.display = 'block';
};

// show previous
const slideLeft = () => {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
};

// left arrow click
arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// show next
const slideRight = () => {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
};

// right arrow click
arrowRight.addEventListener('click', function () {
  if (current === sliderImages.length - 1) {
    current = 1;
  }
  slideRight();
});

startSlide();
