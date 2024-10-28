const express = require('express');
const PORT = 8080;
const app = express();
const carRouter = require('./routes/car.routes')
app.use(express.json());
app.use(carRouter);

app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT,()=>{console.log(`Сервер запущен  на порту ${PORT}`)});