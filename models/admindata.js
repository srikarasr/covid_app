const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  pinCode: {
    type: String,
  },
});

var admindata = mongoose.model("admindata3", adminSchema);
module.exports = admindata;
