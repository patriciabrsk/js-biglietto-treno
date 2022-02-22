const travelDistance = parseInt(prompt('Your travel distance in km:'));
const travellerAge = parseInt(prompt('Your age:'));

if (isNaN(travelDistance) || isNaN(travelAge)) {
    alert('Please enter a valid number');
}

console.log(travelDistance);

const standardPrice = (travelDistance * 0.21);
let totalPrice;

if (travellerAge < 18) {
    totalPrice = (standardPrice - (standardPrice * 0.20));
} else if (travellerAge > 65) {
    totalPrice = (standardPrice - (standardPrice * 0.40));
} else {
    totalPrice = standardPrice;
}

document.getElementById('price').innerHTML +=  `${totalPrice.toFixed(2)} &euro;`;


