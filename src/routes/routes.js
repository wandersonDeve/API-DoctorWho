const express = require("express")
const routes = express.Router()

const DoctorController = require("../controllers/controllers")
const DoctorMiddleware = require("../middlewares/middlewares")

routes.get("/doctors", DoctorController.getAll)


module.exports = routes