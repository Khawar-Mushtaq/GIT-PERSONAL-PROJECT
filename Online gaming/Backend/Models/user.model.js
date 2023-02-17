const mongoose = require("mongoose");
// Schema or Table to be shown in MongoDB documnet
const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: "",
  },
  contact: {
    type: Number,
    default: "",
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
