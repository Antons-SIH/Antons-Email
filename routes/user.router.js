const express = require("express");
const { verified, reupload, sendMail } = require("../controllers/user.controller");
const userRouter = express.Router();
//routes to send email
userRouter.post("/verified", verified);
userRouter.post("/reupload", reupload);
userRouter.post("/sendmail",sendMail)
module.exports = userRouter;
