const express = require('express');
const routes = express.Router();


routes.use('/auth', require('./authRoutes'))
routes.use('/task', require('./taskRoutes'))

module.exports = routes;