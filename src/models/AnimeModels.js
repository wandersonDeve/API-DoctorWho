const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  episodios: {
    type: Number,
    require: true,
  },
  estudio: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Anime", animeSchema)