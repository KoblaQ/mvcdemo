const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// DATABASE FUNCTION CRUD is located here

module.exports = mongoose.model("Product", productSchema);
