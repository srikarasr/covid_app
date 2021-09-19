const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    unique: true,
  },
  pincode: {
    type: String,
  },
  symptoms: {
    type: String,
    default: "None",
  },
  travel_history: {
    type: Boolean,
    default: false,
  },
  covid_contact: {
    type: Boolean,
    default: false,
  },
  is_covid_positive: {
    type: Boolean,
    default: false,
  },
});

var userdata = mongoose.model("userdata3", userSchema);
module.exports = userdata;
