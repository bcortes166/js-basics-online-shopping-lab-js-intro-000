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
  var wordCart = []; var obj; var key; var wordCart = [];

  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
  for (i = 0; i < cart.length ; i++) {
    obj = cart[i]
    key = Object.keys(obj)

    wordCart.push(`you have ${key} at $${obj.key}`)
  }
  return `In your cart, you have ${wordCart}`
}
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
