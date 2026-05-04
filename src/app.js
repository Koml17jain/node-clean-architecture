const express = require('express');
const connnectDB = require('./config/db');

const app = express();

connnectDB();

app.use(express.json());

//routes entry point
app.use('/api', require('./routes'))

module.exports = app;