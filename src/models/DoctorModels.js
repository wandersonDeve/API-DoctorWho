const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  ator: {
    type: String,
    require: true,
  },
  estudio: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema)