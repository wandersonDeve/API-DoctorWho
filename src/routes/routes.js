const express = require("express")
const routes = express.Router()

const controller = require("../controllers/controllers")
const middleware = require("../middlewares/middlewares")

routes.get("/doctors", controller.getAll)
routes.get("/doctors/:id", middleware.validarId, controller.getById)

module.exports = routes