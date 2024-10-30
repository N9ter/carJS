const { json } = require("express");

async function getAllCars() {
    const response = await fetch('api/car',{
        method:'GET'
    });
    const result = await response.json();
    return result;
}
async function getOneCar() {
    const response = await fetch('api/car/' + id,{
        method:'GET'
    });
    const result = await response.json();
    return result;
}
async function addCar(name,description,price,img) {
    const response = await fetch('api/car',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            name:name,
            description:description,
            price:price,
            img:img
        })
    });
}
async function deleteCar(id) {
    await fetch('/api/car/' + id, {
        method:'DELETE'
    })
}
async function updateCar(id,name,description,price,img) {
    const response = await fetch('api/car',{
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            name:name,
            description:description,
            price:price,
            img:img
        })
    });
}

export {getAllCars,getOneCar,updateCar,deleteCar,addCar}