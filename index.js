
require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const server = express();
const productController = require('./Controller/product')
const ConnectToMongo = require('.../db');
ConnectToMongo()

console.log('env', process.env.DB_PASSWORD);

// BodyParser
server.use(express.json());
server.use(express.static("public"));
server.use(morgan("default"));




// MVC  - Model-View-Controller
server.post('/products', productController.createProducts);

server.get('/products', productController.getAllproducts);

server.get('/products', productController.getproduct);

server.put('/products', productController.replaceproduct);

server.patch('/products', productController.updateproduct);

server.delete('/products', productController.deleteproduct);


server.listen(8001, () => {
  console.log("Server has been started");
});
