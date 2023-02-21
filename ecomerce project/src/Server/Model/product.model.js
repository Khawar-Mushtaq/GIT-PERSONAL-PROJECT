const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  Pname: {
    type: String,
    default: "",
  },
  Pmodel: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },
  Hardisk: {
    type: String,
    default: "",
  },
  Ram: {
    type: String,
    default: "",
  },
  file: {
    type:String,
    data:Buffer,
    contentType:String
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
