//----dependencias------
const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuario");

//----Parametros------
const path = "/usuario";

//----Rutas------
router.get(`${path}`, controller.getUsuario);
// router.get(`${path}`, controller.obtenerEncuestas);
// router.post(`${path}`, controller.guardarEncuestas);
// router.get(`${path}/${id}`, controller.obtenerEncuesta);
// router.put(`${path}/${id}`, controller.modificarEncuesta);
// router.delete(`${path}/nueva`, controller.estructuraApi);

module.exports = router;
