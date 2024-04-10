// const http = require("http");
const fs = require("fs");
// const { isUtf8 } = require("buffer");
// const index = fs.readFileSync("index.html", "utf-8");
const data1 = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data1.products;



exports.createProducts = (req, res) => {
  console.log(req.body)
  products.push(req.body);
  res.json(req.body)
  // res.send({ type: "Post" });
};

exports.getAllproducts = (req, res) =>{
  res.json(products)
}

exports.getproduct = (req,res) =>{
  const id = +req.params.id;
  const product = products.find(p=>p.id===id)
  res.json(products)
};
exports.replaceproduct = (req,res) =>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex, 1,{...req.body, id:id})
  res.status(201).json();
};
exports.updateproduct = (req,res) =>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex, 1,{...products,...req.body, id:id})
  res.status(201).json();
};
exports.deleteproduct = (req,res) =>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex, 1)
  res.status(201).json();
};