const menuOrders = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const hamMenu = document.querySelector("#hamMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const productsCart = document.querySelector("#listProductsCart");
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const closeButtonProductDetail = productDetail.querySelector('#closeProductDetail');

menuOrders.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);
closeButtonProductDetail.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  productsCart.classList.add("inactive");
  productDetail.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  productsCart.classList.add("inactive");
  productDetail.classList.add('inactive');
}

function toggleShoppingCart() {
  productsCart.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.add('inactive');
}

function openProductDetail(product){
  displayProductDetail(product);
  productDetail.classList.remove('inactive');
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productsCart.classList.add("inactive");
}

function closeProductDetail(){
  productDetail.classList.add('inactive');
}

/*Products*/
const productList = [];
for (let i = 0; i < 10; i++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
  });
  productList.push({
    name: "Book",
    price: 20,
    image:
      "https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: 'A book which you can be travel to another world.'
  });
  productList.push({
    name: "Colors",
    price: 70,
    image:
      "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: 'Incredible colors!!'
  });
}

displayProducts(productList);

function displayProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click',function() { openProductDetail(product); } );

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

function displayProductDetail(product){
  console.log(product);

  const productImageDetail = productDetail.querySelector('#imgProductDetail');
  productImageDetail.setAttribute('src', product.image);

  const productPrice = productDetail.querySelector('#priceProductDetail');
  productPrice.innerText = product.price;

  const productName = productDetail.querySelector('#nameProductDetail');
  productName.innerText = product.name;

  const productDescription = productDetail.querySelector('#descriptionProductDetail');
  productDescription.innerText = product.description;

}