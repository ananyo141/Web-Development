let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculateCartAmt = () => {
  let cartIcon = document.getElementById("cartAmount");
  let total = basket.map((x) => x.item).reduce((total, x) => total + x, 0);
  cartIcon.innerHTML = total;
};

calculateCartAmt();

let generateCartItems = () => {
  if (basket.length) {
    return (shoppingCart.innerHTML = basket.map((x) => {
        let {id, item} = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
            <img class="item-img" src=${search.img} alt="" />
        </div>
        `
    }).join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="index.html">
            <button class="homeBtn">Back To Home</button>
        </a>
        `;
  }
};

generateCartItems();
