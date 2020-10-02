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
