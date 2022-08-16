const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");;

router.use("/user", userRouter);

router.get("/", (req, res) => {
  return res.send("Welcome to Antons Mail App!");
});

module.exports = router;
