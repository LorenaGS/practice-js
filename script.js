const menuOrders = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const hamMenu = document.querySelector('#hamMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const productsCart = document.querySelector('#listProductsCart');


menuOrders.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productsCart.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productsCart.classList.add('inactive');
}

function toggleShoppingCart(){
    productsCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}