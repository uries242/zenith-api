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

// Create a Product
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

// Read a Single Product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//-- PORT --
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});