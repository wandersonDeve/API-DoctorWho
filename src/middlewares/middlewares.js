const mongoose = require("mongoose");
const Anime = require("../models/AnimeModels");

const validarId = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id invalido" });
    return;
  }
  next();
};

try {
  const anime = await Anime.findById(id);
  if (!anime) {
    return res.status(404).send({ msg: "Anime não encontrado" });
  }
  res.anime = anime;
} catch (err) {
  return res.status(500).send({ error: err });
}

module.exports = { validarId };
