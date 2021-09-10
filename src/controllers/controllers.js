const Doctor = require("../models/DoctorModels");

const getAll = async (req, res) => {
  try {
    const doctor = await Doctor.find();
    return res.send({ doctor });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};


module.exports = {
    getAll
}