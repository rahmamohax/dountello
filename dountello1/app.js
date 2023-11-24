let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

document.querySelector('#cart').onclick=() =>{
        body.classList.toggle('active');
}
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'galaxy.png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'vanilla chairy.png',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'oreo ment.png',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'vanilla sprinkles.png',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'dark choco chunck.png',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];

// var swiper = new Swiper(".product-row", {
//     spaceBetween: 20,
//     // navigation: true,
//     loop: true,
//     centeredSlides: true,
//     hashNavigation: {
//             watchState: true,
//     },
//     autoplay:{
//             delay:9500,
//             disableOnInteraction: false,
//     },
//     navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//             0: {
//             slidesPerView: 1,
//             },
//             768: {
//             slidesPerView: 2,
//             },
//             1024: {
//             slidesPerView: 3,
//             },
//     },
//     });
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="swiper-slide box1" >
        <div class="img">
                    <img src="pics/product/${value.image}">
        </div>
        <div class="pro-content">
                <h3>${value.name}</h3>
                <p>${value.price.toLocaleString()}</p>
                <div class="ordernow">
                    <button onclick="addToCard(${key})">Add To Cart</button>
                </div>
             </div>
             </div>
            `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="pics/product/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}