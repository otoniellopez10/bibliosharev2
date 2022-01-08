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

module.exports = router;
