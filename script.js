const menuOrders = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const hamMenu = document.querySelector("#hamMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const productsCart = document.querySelector("#listProductsCart");
const cardsContainer = document.querySelector('.cards-container');

menuOrders.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productsCart.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productsCart.classList.add("inactive");
}

function toggleShoppingCart() {
  productsCart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

/*Products*/
const productList = [];
for (let i = 0; i < 10; i++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
  productList.push({
    name: "Book",
    price: 20,
    image:
      "https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&w=600",
  });
  productList.push({
    name: "Colors",
    price: 70,
    image:
      "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=600",
  });
}

renderProducts(productList);

function renderProducts(arr) {
  arr.forEach((product) => {
    console.log(product.name);

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDetails = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productDetails.appendChild(productPrice);
    productDetails.appendChild(productName);

    const productFigure = document.createElement('figure');

    const imgAddProduct = document.createElement('img');
    imgAddProduct.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(imgAddProduct);

    productInfo.appendChild(productDetails);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  });
}