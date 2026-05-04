const express = require('express');

const routes = express.Router();

const authController = require('../controllers/authController');


const authMiddleware = require('../middlewares/authMiddleware');

routes.post('/register', authController.register);

routes.post('/login', authController.login);

routes.get('/verify', authMiddleware, authController.verify);

module.exports = routes;

