const express = require("express");
const path = require("path");
const cors = require("cors");

var bodyParser = require("body-parser");
const app = express();
app.use("/files", express.static("./src/files"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// app.use(express.json());

const { SignUp, LogIn } = require("./controllers/auth.controller");
const stateController = require("./controllers/state.controller");
const stateStudent = require("./controllers/student.controller");

app.get("/", async (req, res) => {
  try {
    res.status(200).send("mediayaan_backend");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use("/api/v1/users/signup", SignUp);
app.use("/api/v1/users/login", LogIn);

app.use("/api/v1/resource", stateController);
app.use("/api/v1/users", stateStudent);

module.exports = app;
