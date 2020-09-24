// All Variables
const closeAppBanner = document.querySelector(".close-icon");
const AppBanner = document.getElementById("d-app");
const menu = document.querySelector(".menu");
const sideNav = document.querySelector("#sideNav");
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const menuLine3 = document.querySelector(".line3");

// Promotions timer
const timerFunc = () => {
  let timerDisplay = document.getElementById("pms-timer");
  let timerHours = 14;
  let timerMinutes = 15;
  let timerSeconds = 7;
  let timer = setInterval(calcTimer, 1000);
  function calcTimer() {
    timerSeconds -= 1;
    if (timerSeconds == -1) {
      timerMinutes -= 1;
      timerSeconds = 59;
    }
    if (timerMinutes == -1) {
      timerHours = timerHours != 0 ? timerHours - 1 : 0;
      timerMinutes = 59;
    }
    if (timerHours == -1) {
      timerMinutes = timerMinutes == 0 ? 0 : 0;
    }
    if (timerHours == 0 && timerMinutes == 0 && timerSeconds == 0) {
      clearInterval(timer);
      timerDisplay.innerHTML = "Cleared";
    }
    timerDisplay.innerHTML =
      timerHours + " : " + timerMinutes + " : " + timerSeconds;
  }
};
timerFunc();

const sliderContainer = document.querySelector(".img-slider-lk");
const sliderImages = document.querySelectorAll(".img-slider-lk img");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const rightButtonDiv = document.querySelector(".right-b-slider");
const leftButtonDiv = document.querySelector(".left-b-slider");
//end of slider variables

let counter = 1;
let sliderSize = sliderContainer.clientWidth;
sliderContainer.style.transform = "translateX(" + -sliderSize * counter + "px)";

let slideInterval = setInterval(() => {
  if (counter >= sliderImages.length - 1) return;
  sliderContainer.style.transition = "transform 0.3s ease-in-out";
  counter++;
  sliderContainer.style.transform =
    "translateX(" + -sliderSize * counter + "px)";
}, 4000);

nextBtn.addEventListener("click", () => {
  if (counter >= sliderImages.length - 1) return;
  sliderContainer.style.transition = "transform 0.3s ease-in-out";
  counter++;
  sliderContainer.style.transform =
    "translateX(" + -sliderSize * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  sliderContainer.style.transition = "transform 0.3s ease-in-out";
  counter--;
  sliderContainer.style.transform =
    "translateX(" + -sliderSize * counter + "px)";
});

sliderContainer.addEventListener("transitionend", () => {
  if (sliderImages[counter].id === "firstimage") {
    sliderContainer.style.transition = "none";
    counter = sliderImages.length - 2;
    sliderContainer.style.transform =
      "translateX(" + -sliderSize * counter + "px)";
  }
  if (sliderImages[counter].id === "lastImage") {
    sliderContainer.style.transition = "none";
    counter = sliderImages.length - counter;
    sliderContainer.style.transform =
      "translateX(" + -sliderSize * counter + "px)";
  }
});

sliderContainer.addEventListener("mouseover", () => {
  prevBtn.style.opacity = 1;
  prevBtn.style.cursor = "pointer";
  nextBtn.style.opacity = 1;
  nextBtn.style.cursor = "pointer";
});
