
require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;



mongoose.connect(uri);
mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));


