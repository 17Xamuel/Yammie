// All Variables
const login = document.getElementById("login");
const loginOpt = document.getElementById("login-opt");
const closeAppBanner = document.querySelector(".close-icon");
const AppBanner = document.getElementById("d-app");
const cartValue = document.getElementById("cartNumberItems");
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
// animate menu bars
menu.addEventListener("click", () => {
  sideNav.classList.toggle("activeSideNav");
  menuLine1.classList.toggle("rotateLine1");
  menuLine2.classList.toggle("rotateLine2");
  menuLine3.classList.toggle("rotateLine3");
});
console.log(cartValue.textContent);
if (cartValue.textContent == 1) {
  cartValue.style.padding = "0px 9px";
  cartValue.style.top = "-7px";
  cartValue.style.left = "40px";
}
if (cartValue.textContent < 10 && cartValue.textContent != 1) {
  cartValue.style.padding = "1px 6px";
  cartValue.style.top = "-7px";
  cartValue.style.left = "40px";
}
if (cartValue.textContent >= 10) {
  cartValue.style.padding = "1px 4px";
  cartValue.style.top = "-8px";
  cartValue.style.left = "40px";
}
if (cartValue.textContent >= 11) {
  cartValue.style.letterSpacing = "1px";
  cartValue.style.padding = "1px 6px";
  cartValue.style.top = "-8px";
  cartValue.style.left = "40px";
}
closeAppBanner.addEventListener("click", () => {
  AppBanner.style.display = "none";
});
login.addEventListener("click", () => {
  loginOpt.classList.toggle("showLogin");
});
loginOpt.addEventListener("mouseleave", () => {
  loginOpt.classList.toggle("showLogin");
});

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

// slider images for home page below
let sliderImages = [
  "../resources/image-slider/mask.jpg",
  "../resources/image-slider/rice.jpg",
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

function slideimage(time) {
  setInterval(next, time);
}
slideimage(5000);

if (screen.availWidth <= 1024) {
  slideimage(3000);
}
