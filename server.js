require("dotenv").config();
require("./db/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
// const uri = process.env.MONGO_URI;
// const mongoose = require("mongoose");
const Product = require("./models/Product")

//-- MIDDLEWARE --
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//-- ROUTES --
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } 
  catch (error) {
    res.status(400).json({ message: error.message });
  }
});





//-- PORT --
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});