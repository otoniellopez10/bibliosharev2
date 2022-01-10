const express = require("express");
const router = express.Router();
const path = require("path");

//sn nada, manda al dashboard
router.get("/", function (req, res) {
    res.redirect("/dashboard");
});

router.get("/dashboard", function (req, res) {
    res.render("dashboard");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/inventario", function (req, res) {
    res.render("inventario");
});
router.get("/prestamo", function (req, res) {
    res.render("prestamo");
});
router.get("/devolucion", function (req, res) {
    res.render("devolucion");
});
router.get("/reportes", function (req, res) {
    res.render("reportes");
});

module.exports = router;
