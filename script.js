

let imagesArray = [
  {
    link: "mediaa/1.jpg",
    name: "Mother's Day Bouquet",
    description: "Букет маленького розміру",
    description2: "Price:£34",
    category: 1
  },
  {
    link: "mediaa/2.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£33",
    category: 1
  },
  {
    link: "mediaa/3.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£37",
    category: 1
  },
  {
    link: "mediaa/4.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£30,670",
    category: 1
  },
  {
    link: "mediaa/5.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£30,400",
    category: 1
  },
  {
    link: "mediaa/6.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£40",
    category: 1
  },
  {
    link: "mediaa/7.jpg",
    name: "flower 1",
    description: "put your own description",
    description2: "Price:£41",
    category: 1
  },
  {
    link: "mediaa/11.jpg",
    name: "flower 2",
    description: "put your own description",
    description2: "Price:£33,690",
    category: 2
  },
  {
    link: "mediaa/12.jpg",
    name: "flower 3",
    description: "put your own description",
    description2: "Price:£36",
    category: 2
  },
 
]




function GetImages(category) {
  let container = document.querySelector(".container");
  let out = "<div class='row'>";
  let i = 0;
  imagesArray.forEach(elem => {

    if(category == null || category == elem.category){
      out += "<div class='col-sm-4'><img alt='' src='" + elem.link + "' class='img-thumbnail img-fluid hoverable' title='" + elem.name + "'><p class='description'>"+ elem.description+"</p></div>";
      i = i + 1;
    }
    
    if(i % 3 == 0){
      out += "</div><div class='row'>";
    }

  });
  out += "</div>"
  container.innerHTML = out;
}





// зберігаємо посилання на HTML елемент кошика
const cartItemsCount = document.getElementById("cart-items-count");

// додаємо обробник події для всіх кнопок "Add to basket"
const addToCartButtons = document.querySelectorAll(".add-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// додаємо товар в кошик
function addToCart() {
  // отримуємо ціну товару
  const price = parseInt(this.parentNode.getAttribute("data-price"));

  // отримуємо поточну кількість товарів у кошику
  let cartItems = parseInt(cartItemsCount.innerText);

  // збільшуємо кількість товарів у кошику
  cartItems++;
  cartItemsCount.innerText = cartItems;

  // зберігаємо кількість товарів у локальному сховищі браузера
  localStorage.setItem("cartItems", cartItems);

  // зберігаємо дані про товар у локальному сховищі браузера
  let cartData = localStorage.getItem("cartData");
  if (!cartData) {
    cartData = {};
  } else {
    cartData = JSON.parse(cartData);
  }

  if (cartData[price]) {
    cartData[price]++;
  } else {
    cartData[price] = 1;
  }

  localStorage.setItem("cartData", JSON.stringify(cartData));
}





function close(){
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}



setTimeout(() => {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let closeBtn = document.querySelector("#closeBtn");
  closeBtn.addEventListener("click", close);
}, 3000)


const modalWrapper = document.getElementById("modal-wrapper");
const closeButton = document.getElementById("close-button");
const timeLeftSpan = document.getElementById("time-left");

let timeLeft = 5;


setTimeout(() => {
  modalWrapper.style.display = "flex";
  const timer = setInterval(() => {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      closeButton.removeAttribute("disabled");
      timeLeftSpan.parentElement.style.display = "none";
    }
  }, 1000);
}, 10000);

closeButton.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});





