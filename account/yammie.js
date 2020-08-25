const c = () => {
  let i_1 = document.querySelector("#cr-f-name");
  let i_2 = document.querySelector("#cr-l-name");

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      response.forEach((el) => {
        if (i_1.value == el.email || i_1.value == el.phone) {
          if (i_2.value == el.password) {
            window.location.href = "/home/index.html";
          }
        } else {
          document.getElementById("wrong-e").style.opacity = 1;
          document.getElementById("wrong-p").style.opacity = 1;
        }
      });
    }
  };

  xhr.open("GET", "http://localhost/api/va.php", true);
  xhr.send();
};
