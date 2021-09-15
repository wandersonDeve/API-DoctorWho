const cors = require("cors");
const express = require("express");
const routes = express.Router();

const controller = require("../controllers/controllers");
const middleware = require("../middlewares/middlewares");

routes.use(cors());
routes.options("*", cors());

routes.get("/", controller.home);
routes.get("/doctors", controller.getAll);
routes.get("/doctors/:id", middleware.validarId, controller.getById);
routes.post("/doctors", controller.create);
routes.put("/doctor/:id", middleware.validarId, controller.update);
routes.delete("/doctor/:id", middleware.validarId, controller.del);
routes.get("/filterAll", controller.filterAll);

module.exports = routes;
