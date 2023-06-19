const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/gallery", function (req, res) {
  res.render("gallery");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/policy", function (req, res) {
  res.render("policy");
});

app.listen(3000, function () {
  console.log("Server is up and running at port 3000,");
});
