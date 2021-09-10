const Doctor = require("../models/DoctorModels");

const getAll = async (req, res) => {
  try {
    const doctor = await Doctor.find();
    return res.send({ doctor });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};
const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      res.status(400).send({ message: "Doutor não encontrado" });
      return;
    }
    return res.send({ doctor });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = {
  getAll,
  getById
};
