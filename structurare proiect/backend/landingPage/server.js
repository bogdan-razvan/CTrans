const express = require("express");
const path = require("path");
const _ = require("lodash");
const bodyParser = require("body-parser");
const fs = require("fs");
// const cookieParser = require("cookie-parser");
const routes = require("./routes/index.js");
const app = express();
var port = process.env.PORT || 3000;

//view engine setup
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use("/", routes);

//catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});



app.listen(port, () => {
    console.log("Started on port: ", port);
});