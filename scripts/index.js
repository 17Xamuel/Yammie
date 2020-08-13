// variables
const topSellingContainer = document.querySelector("#tp-s");
const phoneAccessoriesContainer = document.querySelector("#phone-acs");
const plasticsContainer = document.querySelector("#plastics");

class Items {
  async getProducts() {
    try {
      let result = await fetch("../scripts/products.json");
      return result.json();
    } catch (error) {
      console.log(error);
    }
  }
}
class DisplayItems {
  display(items) {
    let item = "";
    items.forEach((el) => {
      item += `<div class="item">
        <img
          src=${el.img}
          alt=""
          width="150"
          height="150"
        />
        <div class="item-info">
          <div class="it-nm">
            Jesa Milk - 500ml
          </div>
          <div class="it-pr pr">
            UGX 500
          </div>
          <div class="pre-it-pr pr">
            UGX 750
          </div>
        </div>
      </div>`;
    });
    return item;
  }
}
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const items = new Items();
  const displayItems = new DisplayItems();
  items
    .getProducts()
    .then((items) => {
      /*items param holds the whole items-array from the 
    json data*/

      let { topSelling } = items;
      let { item } = items;
      console.log(topSelling);
      topSellingContainer.innerHTML = displayItems.display(topSelling);
      phoneAccessoriesContainer.innerHTML = displayItems.display(item);
      plasticsContainer.innerHTML = displayItems.display(item);
    })
    .catch((reject) => {
      console.log("No Products got");
    });
});
