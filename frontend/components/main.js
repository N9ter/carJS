import {getAllCars, addCar, deleteCar} from '../requests/car.requests.js';
import {createItem} from './components/item.js';

async function elements() {
    const cars = await getAllCars();

    for(let car of cars){
        let listItem = createItem(car.name,car.description,car.price,car.img);

        listItem.btnDetail.addEventListener('click',()=>{


        });

        listItem.btnDelete.addEventListener('click',()=>{
            if(confirm("Удалить запись?")){
                deleteCar(car.id);
                listItem.item.remove();
            }
        })

        carList.appendChild(listItem.item);
    }
}

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    elemetsGenerator();
    let form = document.getElementsByName('add-el-form');

    form.addEventListener('submit',()=>{
        let carName = document.getElementById('car-name');
        let carDescr = document.getElementById('car-description');
        let carPrice = document.getElementById('car-price');
        let carImg = document.getElementById('car-img');

        addCar(carName.value,carDescr.value,carPrice.value,carImg.value);
        let listItem = createItem(carName.value,carDescr.value,carPrice.value,carImg.value);
        carList.appendChild(listItem.item);
    })
})