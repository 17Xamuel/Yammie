//script for the index page

//variables
const menu = document.querySelector(".harmburger");
const navlist = document.querySelector(".navlist");
const middleLine = document.querySelector(".middle-line");
const upperLine = document.querySelector(".upper-line");
const lowerLine = document.querySelector(".lower-line");
const products = document.getElementsByClassName("products");
const product = document.getElementsByClassName("product");

console.log(products[0].children.length);
console.log(products[0].childNodes);
console.log(products[0]);

if (products[0].children.length < 6) {
  products[0].classList.add("display-inline");
  for (let i = 0; i < product.length; i++) {
    product[i].classList.add("margin-right");
  }
}
menu.addEventListener("click", () => {
  navlist.classList.toggle("open");
  middleLine.classList.toggle("cross");
  upperLine.classList.toggle("cross");
  lowerLine.classList.toggle("cross");
});

class Products {
  async getProducts() {
    try {
      let result = await fetch("../scripts/products.json");
      let data = result.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
class DisplayProducts {}
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  products
    .getProducts()
    .then(products => {
      /*products param holds the whole items-array from the 
    json data*/
      console.log(products.items[2].id);
    })
    .catch(reject => {
      console.log("No Products got");
    });
});
