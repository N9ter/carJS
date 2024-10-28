const { Router } = require("express");
const router = new Router();
const carController = require('.../controllers/car.controller.js');

router.post('/api/car',carController.createCar);
router.get('/api/car',carController.getCar);
router.get('/api/car:id',carController.getCar);
router.put('/api/car',carController.updateCar);
router.get('/api/car:id',carController.deleteCar);