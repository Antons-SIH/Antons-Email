const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/index"));

let port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is up and running at port:", port);
});
