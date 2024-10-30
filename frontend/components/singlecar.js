import { getOneCar } from "../requests/car.requests.js";

document.addEventListener('DOMContentLoaded',async ()=>{
    let carId = window.location.pathname.split('/').pop();
    const result = await getOneCar(carId);

    let car = result[0];

    document.getElementById('car-img').src=car.img;
    document.getElementById('car-name').innerText=car.name;
    document.getElementById('car-description').innerText=car.description;
    document.getElementById('car-price').innerText=car.price;
})