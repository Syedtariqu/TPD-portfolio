const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    unique: true,
  },
  category: { type: String, required: [true, "Category is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  rating: { type: Number, require: [true, "Rating value is required"] },
  shortDescription: {
    type: String,
    require: [true, "shortDescription is required"],
  },
  image: { type: String, required: true }, 
  link: {
    type: String,
    required: [true, "Product url is required"],
    unique: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
