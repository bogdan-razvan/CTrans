const express = require("express");
const router = express.Router();
const path = require("path");
// const fs = require("fs");
router.get("/", (req, res, next) => {
    // res.writeHead(200, { 'Content-Type': 'text/jade' });
    // var html = fs.readFileSync(__dirname + "index.jade", 'utf8');
    // res.send(html);
    res.render("index", { title: "Transporter" });
    // var htmlPath = "views/index.jade";
    // console.log(htmlPath);
    // res.sendFile("index");

});

module.exports = router;