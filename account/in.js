const crte = () => {
  let fn = document.querySelector("#cr-f-name");
  let ln = document.querySelector("#cr-l-name");
  let email = document.querySelector("#cr-email");
  let pd = document.querySelector("#cr-password");
  let phne = document.querySelector("#cr-phone");
  let gender = document.querySelector("#cr-gender");
  let user = {};

  console.log(gender.value);
  if (gender.value == "MALE" || gender.value == "FEMALE") {
    user.gdr = gender.value;
  } else {
    document.querySelector(".gender").style.opacity = "1";
  }
  if (pd.value.length < 6) {
    document.querySelector(".password").style.opacity = "1";
  } else {
    user.password = pd.value;
  }
  if (phne.value.length == 10 && phne.value.charAt(0) == 0) {
    user.phone = phne.value;
  } else {
    document.querySelector(".password").style.opacity = "1";
  }
  user.fn = fn.value;
  user.ln = ln.value;
  user.email = email.value;
  console.log(user);
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      response.forEach((el) => {
        if (email.value == el.email) {
          document.querySelector(".used-e").style.opacity = "1";
        }
      });
    }
  };

  xhr.open("GET", "http://localhost/api/va.php", true);
  xhr.send();
};

let str = "dan";
let c2 = charAt();
console.log();
