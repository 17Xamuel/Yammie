let sliderImages = [
  "../resources/image-slider/mask.jpg",
  "../resources/image-slider/sugar.jpg",
  "../resources/image-slider/shoe.jpg",
  "../resources/image-slider/shoe1.jpg",
  "../resources/image-slider/sugar.jpg",
];

var image = 0;

function next() {
  let slider = document.getElementById("slide-image");
  image++;
  if (image >= sliderImages.length) {
    image = 0;
  }
  slider.src = sliderImages[image];
}

function back() {
  let slider = document.getElementById("slide-image");
  image--;
  if (image < 0) {
    image = sliderImages.length - 1;
  }
  slider.src = sliderImages[image];
}

function slideimage() {
  setInterval(next, 6000);
}
slideimage();
