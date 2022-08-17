const express = require("express");
const { verified, reupload } = require("../controllers/user.controller");
const userRouter = express.Router();
//routes to send email
userRouter.post("/verified", verified);
userRouter.post("/reupload", reupload);
module.exports = userRouter;
