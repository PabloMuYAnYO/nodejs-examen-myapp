// * requires
const express = require('express');
const path = require('path');
require('dotenv').config();

// * requires router
const indexRouter = require('./src/routes/index');
const photosRouter = require('./src/routes/photos');


// * app iniciar
const app = express();


// * conf vistas
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// * middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // public dir


// * var globals


// * rutas
app.use('/', indexRouter);
app.use('/photos', photosRouter);

module.exports = app;