// All Variables
const closeAppBanner = document.querySelector(".close-icon");
const AppBanner = document.getElementById("d-app");
const menu = document.querySelector(".menu");
const sideNav = document.querySelector("#sideNav");
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const menuLine3 = document.querySelector(".line3");

//dispaly categories-dtl
const displayCategories = (ctg, ctgDetail) => {
  ctg.addEventListener("mouseover", () => {
    ctgDetail.style.display = "flex";
  });
  ctg.addEventListener("mouseout", () => {
    ctgDetail.style.display = "none";
  });
  ctgDetail.addEventListener("mouseover", () => {
    ctgDetail.style.display = "flex";
  });
};
//easy market
displayCategories(
  document.getElementById("ctg-easy-market"),
  document.getElementById("ctg-dtl-easy-m")
);
//foods and drinks
displayCategories(
  document.getElementById("ctg-foods-drinks"),
  document.getElementById("ctg-dtl-f-d")
);
//phone & Accessories
displayCategories(
  document.getElementById("ctg-phones"),
  document.getElementById("ctg-dtl-phones")
);
//Electronics
displayCategories(
  document.getElementById("ctg-electronics"),
  document.getElementById("ctg-dtl-electronics")
);
//Clothes & shoes
displayCategories(
  document.getElementById("ctg-clothes"),
  document.getElementById("ctg-dtl-clothes")
);
//Kitchen Staff
displayCategories(
  document.getElementById("ctg-kitchen"),
  document.getElementById("ctg-dtl-kitchen")
);
//Computing & Accessories
displayCategories(
  document.getElementById("ctg-computing"),
  document.getElementById("ctg-dtl-computing")
);
//Kids section
displayCategories(
  document.getElementById("ctg-kids"),
  document.getElementById("ctg-dtl-kids")
);
//Cleaning Healthy & Beauty
displayCategories(
  document.getElementById("ctg-cleaning"),
  document.getElementById("ctg-dtl-cleaning")
);
//stationery
displayCategories(
  document.getElementById("ctg-stationery"),
  document.getElementById("ctg-dtl-stationery")
);

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

// sliderContainer.addEventListener("mouseout", () => {
//   rightButtonDiv.style.opacity = 0;
//   leftButtonDiv.style.opacity = 0;
// });
// let sliderImages = [
//   "../resources/image-slider/mask.jpg",
//   "../resources/image-slider/rice.jpg",
//   "../resources/image-slider/shoe.jpg",
//   "../resources/image-slider/shoe1.jpg",
//   "../resources/image-slider/sugar.jpg",
// ];

// var image = 0;

// function next() {
//   let slider = document.getElementById("slide-image");
//   image++;
//   if (image >= sliderImages.length) {
//     image = 0;
//   }
//   slider.src = sliderImages[image];
// }

// function back() {
//   let slider = document.getElementById("slide-image");
//   image--;
//   if (image < 0) {
//     image = sliderImages.length - 1;
//   }
//   slider.src = sliderImages[image];
// }

// function slideimage(time) {
//   setInterval(next, time);
// }
// slideimage(5000);

// if (screen.availWidth <= 1024) {
//   slideimage(3000);
// }
