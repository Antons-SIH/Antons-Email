const mailSender = require("../utils/sendMail");

async function verified(req, res){
  try {
    const { email, name } = req.body;

    const user = email;
    const subject = `Successful verification of documents.`;
    const template = `Are you still deciding whether to apply for our Fall Fellowship?? I'm here to tell you that the time is now! We've had a terrific response from the community this semester and we anticipate we'll be closing applications for the fall on August 31st, 2022.`;

    //sending mail
    mailSender(res, user, subject, template);
  } catch (err) {
    console.log(err);
  }
};

async function reupload(req, res){
  try {
    const { email, name } = req.body;

    const user = `atharvakinikar2001@gmail.com`
    const subject = `Failed Verification.`;
    const template =`Hello user! Please re-upload a clear image of your document for verification.`
    //sending mail:
    mailSender(res, user, subject, template);
  } catch (err) {
    console.log(err);
  }
};

module.exports={verified,reupload}