const express = require("express");

//----TABLAS BASICAS------
const usuario = require("./usuario");
// const encuesta = require('./encuesta')
// const encuestado = require('./encuestado')
// const estructura = require('./estructuraEncuesta')
// const respuesta = require('./respuesta')
// const rol = require('./rol')
// const servicio = require('./servicio')
// const tipoPregunta = require('./tipoPregunta')
// const usuario = require('./usuario')

//----app------
const app = express();

//---- Rutas Publicas ------
app.use(
    "/",
    //---- Tablas Basicas ----
    usuario
    // encuesta,
    // encuestado,
    // estructura,
    // respuesta,
    // rol,
    // servicio,
    // tipoPregunta,
    // usuario
);

//----Exportar Rutas------
module.exports = app;
