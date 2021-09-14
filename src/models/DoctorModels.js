const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  doctor: {
    type: String,
    require: true,
  },
  ator: {
    type: String,
    require: true,
  },
  imageSeason: {
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("Doctor", doctorSchema)