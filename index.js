var cart = [];
var randNum = () => {
    var n = Math.floor(Math.random()*100)
    if (n > 0) {
      return n
    }
}
var i;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart = [...cart, {itemName: item, itemPrice: randNum()}]
 return `${item} has been added to your cart.`
}

function viewCart() {
  for (i = )
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
