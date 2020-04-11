const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require ('./config/config')
 
//parse aplicacion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse aplicacion/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json('Hello World')
})

app.post('/usuario', function (req, res) {
  
 let body = req.body

 if(body.name === undefined){

  res.status(400).json({
    ok: false,
    mensaje:"Error el nombre es necesario"
  })
 }else{
  
 res.json({
   body
 })
}
  cosole.log('Request post')
})

app.put('/', function (req, res) {
  res.json('Hello put')
})

app.delete('/', function (req, res) {
  res.json('Hello delete')
})
 
app.listen(process.env.PORT, ()=> {
    console.log('Escuchando el el puerto ' + process.env.PORT)
})