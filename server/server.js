const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/', function (req,res) {
    res.json({
        "mensaje" : "Bienvenido al examen de Momento2 "
    }) 
 });

 app.get('/database', function (req,res) {
  res.json({
      "mensaje" : "conexión correcta a MONGODB y a la base de Datos Momento 2"
  }) 
});

 app.get('/saludo/nombre', function (req,res) {
   let nombre = req.params.nombre
   res.json({
    "data" : "Bienvenido Elkin"
}) 
});



app.get('/edad/:XY', function (req,res) {
  var mayor = req.params.XY;
  var mayor = 18;
  let nombre = "castaño";

  if(mayor >= 0 && mayor <= 150){
    if(mayor >= 18){
      res.json({
        "data" : 'Eres Mayor de Edad'
      })
    }else{
      res.json({
        "err" : 'No lo Eres, Mayor de Edad'
      })
    }
  }
 });

 mongoose.connect('mongodb://localhost:27017/momento2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
},(err,res ) => {
  if(err) throw err;
  console.log("Conectado a la Base");
});

app.listen(3000,() => {
    console.log("Server online");
});

