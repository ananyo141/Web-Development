let shop = document.getElementById("shop");

let calculateCartAmt = () => {
  let cartIcon = document.getElementById("cartAmount");
  let total = basket.map((x) => x.item).reduce((total, x) => total + x, 0);
  cartIcon.innerHTML = total;
};

let findItem = (id) => {
  console.log(basket);
  return basket.find((x) => x.id === id);
};

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = findItem(x.id) || [];
      console.log(search);
      return `
            <div id=product-id-${id} class="item">
                <img class="item-img" src="${img}">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                            <div id=${id} class="quantity">
                                ${search.item === undefined ? 0 : search.item}
                            </div>
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join(""));
};

generateShop();
calculateCartAmt();

let increment = (id) => {
  let selectedItem = id;

  let search = findItem(selectedItem.id);
  if (search === undefined) {
    search = {
      id: selectedItem.id,
      item: 1,
    };
    basket.push(search);
  } else {
    search.item += 1;
  }
  update(search);
};

let decrement = (id) => {
  let selectedItem = id;

  let search = findItem(selectedItem.id);
  if (search !== undefined && search.item) {
    search.item -= 1;
    basket = basket.filter((x) => x.item !== 0);
    update(search);
  }
};

let update = (idObj) => {
  localStorage.setItem("data", JSON.stringify(basket));
  document.getElementById(idObj.id).innerHTML = idObj.item;
  calculateCartAmt();
};
