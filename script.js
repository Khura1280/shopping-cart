

const products =[
    {
id :1,
name:"Round neck T-shirt",
price:"R600",
image:"./images/product4.jpeg"
},
{
    id :2,
    name:"Shirt and Brown shoes",
    price:"R476",
    image:"./images/cloth2.jpg"
    },
    {
        id : 3,
        name:"White dress",
        price:"R330",
        image:"./images/women-2.jpg"
   },
   {
        id : 4,
        name:"Green Cap",
        price:"R200",
        image:"./images/product3.jpeg"
    },
   {
        id : 5,
        name:"Sneakers",
                price:"R900",
                image:"./images/product8.jpeg"
                },
                {
                    id : 6,
                    name:"Addidas Jersey ",
                    price:"R230",
                    image:"./images/product1.jpeg"
                    },  
                    {
                        id :7,
                        name:"Adidas Container",
                        price:"R270",
                        image:"./images/product7.jpeg"
                        },  
                        {
                            id: 8,
                            name:"Earphones",
                            price:"R250",
                            image:"./images/product6.jpeg"
                            }, 
                            {
                                id : 9,
                                name:"White Shirt",
                                price:"R320",
                                image:"./images/men-3.jpg"
                                }, 
                                {
                                    id :10,
                                    name:"Mini Skirt",
                                    price:"R230",
                                    image:"./images/cloth10.jpg"
                                    },  
                                    {
                                        id :11,
                                        name:"Round neck T-shirt",
                                        price:"R220",
                                        image:"./images/cloth4.jpg"
                                        }, 
                                        {
                                            id :12,
                                            name:"Round neck T-shirt",
                                            price:"R220",
                                            image:"./images/women-4.jpg"
                                            },  
                                            {
                                                id :13,
                                                name:"White Shirt",
                                                price:"R230",
                                                image:"./images/men-1.jpg"
                                                },  
                                                {
                                                    id :14,
                                                    name:"Teens Wear",
                                                    price:"R220",
                                                    image:"./images/women-1.jpg"
                                                    }, 
                                                    {
                                                        id :15,
                                                        name:"Watch",
                                                        price:"R250",
                                                        image:"./images/watch-1.jpg"
                                                        },                  
];


const itemsData =[
    {
id :1,
name:"Round neck T-shirt",
price:"R600",
image:"./images/product4.jpeg"
},
{
    id :2,
    name:"Shirt and Brown shoes",
    price:"R476",
    image:"./images/cloth2.jpg"
    },
    {
        id : 3,
        name:"White dress",
        price:"R330",
        image:"./images/women-2.jpg"
   },
   {
        id : 4,
        name:"Green Cap",
        price:"R200",
        image:"./images/product3.jpeg"
    },
   {
        id : 5,
        name:"Sneakers",
                price:"R900",
                image:"./images/product8.jpeg"
                },
                {
                    id : 6,
                    name:"Addidas Jersey ",
                    price:"R230",
                    image:"./images/product1.jpeg"
                    },  
                    {
                        id :7,
                        name:"Adidas Container",
                        price:"R270",
                        image:"./images/product7.jpeg"
                        },  
                        {
                            id: 8,
                            name:"Earphones",
                            price:"R250",
                            image:"./images/product6.jpeg"
                            }, 
                            {
                                id : 9,
                                name:"White Shirt",
                                price:"R320",
                                image:"./images/men-3.jpg"
                                }, 
                                {
                                    id :10,
                                    name:"Mini Skirt",
                                    price:"R230",
                                    image:"./images/cloth10.jpg"
                                    },  
                                    {
                                        id :11,
                                        name:"Round neck T-shirt",
                                        price:"R220",
                                        image:"./images/cloth4.jpg"
                                        }, 
                                        {
                                            id :12,
                                            name:"Round neck T-shirt",
                                            price:"R220",
                                            image:"./images/women-4.jpg"
                                            },  
                                            {
                                                id :13,
                                                name:"White Shirt",
                                                price:"R230",
                                                image:"./images/men-1.jpg"
                                                },  
                                                {
                                                    id :14,
                                                    name:"Teens Wear",
                                                    price:"R220",
                                                    image:"./images/women-1.jpg"
                                                    }, 
                                                    {
                                                        id :15,
                                                        name:"Watch",
                                                        price:"R250",
                                                        image:"./images/watch-1.jpg"
                                                        },                  
];
const myList = document.querySelector(".list-items");
const cardContainer = document.querySelector(".container1");
const openCartBtn = document.getElementById("icon");
const cart = document.getElementById("cart");
const close = document.getElementById("close");
const postMethods = ()=>{
    products.map((product)=>{
       const productEl = document.createElement('li');
       productEl.classList.add('item'); 
       productEl.innerHTML =`
       <img src="${product.image}" class="shop-item-image" alt="">
       <div class="name">${product.name}</div>
       <div class="price">${product.price}</div>
       <div class="description">Lorem ipsum dolor sit amet </div>
       <button class="popup-btn" id="popup-btn"><i class="fa fa-shopping-cart"></i> Add To Cart</button>
       
   `
   myList.appendChild(productEl);
    }).join('');

itemsData.map((product)=>{
    const cardEl = document.createElement("div");
    cardEl.classList.add('card')
    cardEl.innerHTML=`<img src="${product.image}" class="shop-item-image card-item-image" alt="">
    <div class="name">${product.name}</div>
    <div class="price">${product.price}</div>
    <div class="description">Lorem ipsum dolor sit amet </div>
    <button class="popup-btn" id="popup-btn"><i class="fa fa-shopping-cart"></i> Add To Cart</button>`
    cardContainer.appendChild(cardEl);
   }).join('');
}

postMethods();
function openCart(){
    
    cart.classList.toggle("show")
}
function closeCart(){
    cart.classList.toggle("show")
}
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
var removeCartItemButtons = document.getElementsByClassName("delete");
console.log(removeCartItemButtons);
for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener("click",removeCartItem)
 }
 var quantityInput = document.getElementsByClassName("quantity");
 for(var i = 0; i < quantityInput.length;i++){
    var input = quantityInput[i]
    input.addEventListener('change',quantityChanged)
 }
 var addToCartButtons = document.getElementsByClassName("popup-btn");
 for(var i = 0; i < addToCartButtons.length;i++){
    var button = addToCartButtons[i]
    button.addEventListener('click',addToCartClicked)
 }

}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    /*alert ('This item will be remove from the cart')*/
    updateCartTotal()
}
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('name')[0].innerText
    var price = shopItem.getElementsByClassName("price")[0].innerText
    var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    
    addItemToCart(title,price,imgSrc)
    updateCartTotal()
}
/*var getSiblings = (elem)=>{
    var siblings =[];
    var sibling = elem.parentNode.
} */
function addItemToCart(title,price,imgSrc){
    var cartRow = document.createElement('tr')
    cartRow.classList.add("cart-row")
    var cartImage = document.getElementsByClassName('cart-item-image');
    alert("This Item will be added to Cart!");
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imgSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartRowContent = `<td><img src="${imgSrc}" class="cart-item-image" alt="" /></td>
                          <td><p class="name">${title}</p></td>
                          <td class="quantity-input"><input type="text" class="quantity" name="amount" value="1" /></td>
                          <td class="cost">${price}</td>
                          <td class="delete"><a href="#">delete</a></td>`
    cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("delete")[0].addEventListener("click",removeCartItem)
}
onLoadCartNumbers();
function updateCartTotal(){
   var cartItemContainer = document.getElementsByClassName("cart-items")[0]
  var cartRows = cartItemContainer.getElementsByClassName("cart-row")
  var total = 0;
  
  for(var i = 0; i < cartRows.length; i++){
       var cartRow = cartRows[i]
       var priceElement = cartRow.getElementsByClassName("cost")[0]
       var quantityElement = cartRow.getElementsByClassName("quantity")[0]
       var price = parseFloat(priceElement.innerText.replace('R', ''))
       var quantity = quantityElement.value 
       total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = 'R' + total
  document.getElementsByClassName('cart-span-qu')[0].textContent = i 
}
const container = document.getElementById('card-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the sliding sensitivity here
      container.scrollLeft = scrollLeft - walk;
    });

