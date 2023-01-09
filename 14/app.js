const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const userRouter = require("./routes/users.route");
require("./config/db");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//if not found similar route or invalid rout, then program must follow this code
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found"
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke"
  });
});


module.exports = app;