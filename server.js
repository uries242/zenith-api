require("dotenv").config();
require("./db/connection");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const mongoose = require("mongoose");


//-- MIDDLEWARE --
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


//-- ROUTES --
app.get("/", (req, res) => {
  res.send("yeah bey tings solid!")
});



//-- PORT --
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});