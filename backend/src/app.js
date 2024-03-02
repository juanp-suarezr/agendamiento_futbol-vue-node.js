const express = require('express');
const config = require( './config' );
const usuario = require('./modulos/usuario/rutas');
const tipo_cancha = require('./modulos/tipo_cancha/rutas');
const disponibilidad = require('./modulos/disponibilidad/rutas');
const agendamientos = require('./modulos/agendamientos/rutas');

const app = express();

// Middlewares
app.use(express.json()); // Parsear el body
app.use(express.urlencoded({ extended: true })); //Parse


//config
app.set('port', config.app.port);

app.use('/api/usuario', usuario);
app.use('/api/tipo', tipo_cancha);
app.use('/api/disponibilidad', disponibilidad);
app.use('/api/agendamientos', agendamientos);

//rutas


module.exports = app;