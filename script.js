// services div
const servicesContainer = [
  {
    'className':'pricePremium',
    'img':'images/car_wash_service.jpg',
    'title':'Premium Car Wash',
    'desc':'Our top-tier service for the most luxurious clean.' 
  },
  {
    'className':'priceGold',
    'img':'images/background_image.jpg',
    'title':'Gold Car Wash',
    'desc':'Our premium service with attention to detail.'
  },
  {
    'className':'priceSilver',
    'img':'images/background 2.jpg',
    'title':'Silver Car Wash',
    'desc':'A quick and effective car wash for a polished look.'
  },
  {
    'className':'priceInterior',
    'img':'images/detailing 1.jpg',
    'title':'Interior Cleaning',
    'desc':'Get your car`s interior fresh and spotless.'
  }
]
let content = '';
servicesContainer.forEach((servicescontainer) => {
  content += `<div class="service-section">
          <img src="${servicescontainer.img}" alt="${servicescontainer.title}" class="service-img">
          <div class="service-details">
            <h2 class='title'>${servicescontainer.title}</h2>
            <p>${servicescontainer.desc}</p>
            <div class="price ${servicescontainer.className}">&#8377;--</div>
            <div class="service-actions">
              <button class="book-now">Book Wash</button>
            </div>
          </div>
        </div>`;
        console.log(content);
});
let mainContent = document.querySelector('.mainContent');
mainContent.innerHTML=content;


// Show the modal for car selection
const carSelectionModal = document.getElementById('carSelectionModal');
const selectCarBtn = document.getElementById('selectCarBtn');
const closeModal = document.querySelector('.close');

selectCarBtn.onclick = function() {
  carSelectionModal.style.display = 'flex';
};

closeModal.onclick = function() {
  carSelectionModal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == carSelectionModal) {
    carSelectionModal.style.display = 'none';
  }
};
//selecting price content
pricePremium = document.querySelector('.pricePremium');
priceSilver = document.querySelector('.priceSilver');
priceGold = document.querySelector('.priceGold');
// select the car model
let slectedModel = document.getElementById('carSelect');
slectedModel.addEventListener('change',()=>{
  slectedValue=slectedModel.value;
  alert(`you Have Selected ${slectedValue}`);
  //premium
  pricePremium.innerHTML = `&#8377;${washPrice[slectedValue]+3000}`;
  priceSilver.innerHTML = `&#8377;${washPrice[slectedValue]}`;
  priceGold.innerHTML = `&#8377;${washPrice[slectedValue]+2000}`;
});
//creating objects for price of the car
let washPrice={
  'Ford':6000,
  'Lambohini':8000,
  'Hundai':4000,
  'Swift':3500,
  'Audi':4000,
  'Truck':6500,
  'Honda':3000,
  'Jaguar':7000,
  'BMW':7500,
  'Mercedes-benz':8400,
  'Mini cooper':9000
}
// creating add to cart button to add items on the home screen
let cart=[];
document.querySelectorAll(".add-to-cart").forEach((addbutton)=>{
  addbutton.addEventListener('click',()=>{
    const washName = addbutton.dataset.washname;
    const cartImg = addbutton.closest('.service-img');
    const cartTitle = addbutton.closest('.title');
    console.log(cartImg);
    cart.push({
      'img':cartImg,
      'title':cartTitle,
      'carType':slectedModel,
     })
    });
   // clearTimeout(id);
});
