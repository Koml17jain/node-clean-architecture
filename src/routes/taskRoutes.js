const express = require("express");

const routes = express.Router();

const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

routes.use(authMiddleware);

routes.post('/', taskController.create);

routes.get('/', taskController.getAll);

module.exports = routes;
