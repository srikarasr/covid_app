const mongoose = require("mongoose");

const covidSchema = mongoose.Schema({
  user_id: {
    type: String,
  },
  admin_id: {
    type: String,
  },
  result: {
    type: String,
  },
});

var coviddata = mongoose.model("coviddata3", covidSchema);
module.exports = coviddata;
