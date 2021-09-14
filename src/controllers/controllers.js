const Doctor = require("../models/DoctorModels");

const getAll = async (req, res) => {
  try {
    const doctor = await Doctor.find();
    return res.send({ doctor });
  } catch (err) {
    res.status(500).send({ error: err.message });
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
    res.status(500).send({ error: err.message });
  }
};
const create = async (req, res) => {
  const { doctor, ator, imageSeason } = req.body;

  if (!doctor || !ator || !imageSeason) {
    res.status(400).send({
      message: "Dado invalido, verifique se a estrutura esta correta",
    });
    return;
  }

  const novoDoctor = await new Doctor({
    doctor,
    ator,
    imageSeason,
  });

  try {
    await novoDoctor.save();
    return res
      .status(200)
      .send({ message: "Um novo doutor foi adicinado a TARDIS" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const update = async (req, res) => {
  const { doctor, ator, imageSeason } = req.body;

  if (!doctor || !ator || !imageSeason) {
    res.status(400).send({
      message: "Dado invalido, verifique se a estrutura esta correta",
    });
    return;
  }

  res.doctor.doctor = doctor;
  res.doctor.ator = ator;
  res.doctor.imageSeason = imageSeason;

  try {
    await res.doctor.save();
    res.send({ message: "Doutor regenerado com sucesso" });
  } catch (err) {
    res.status(500).send({ error: err, message });
  }
};
const del = async (req, res) => {
  try {
    await res.doctor.remove();
    return res.send({
      message: "O doutor se foi, uma nova regeneração virá em breve",
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const filterByName = async (req, res) => {
  const ator = req.query.ator;
  if (!ator) {
    res.status(400).send({ message: "Busca não encontrada" });
    return;
  }

  try {
    const doctor = await Doctor.find({
      ator: {
        $regex: `${ator}`,
      },
    });
    res.send({ ator });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const filterAll = async (req, res) => {
  let { ator, doctor, imageSeason } = req.query;

  !ator ? (ator = "") : (ator = ator);
  !doctor ? (doctor = "") : (doctor = doctor);
  !imageSeason ? (imageSeason = "") : (imageSeason = imageSeason);

  try {
    const doctors = await Doctor.find({
      ator: { $regex: `${ator}`, $options: "i" },
      doctor: { $regex: `${doctor}`, $options: "i" },
      imageSeason: { $regex: `${imageSeason}`, $options: "i" },
    });

    if (doctors.length === 0) {
      return res.status(404).send({ erro: "Doutor não encontrado" });
    }

    return res.send({ doctors });
  } catch (err) {
    res.send(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterAll,
};
