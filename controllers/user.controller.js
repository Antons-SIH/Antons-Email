const mailSender = require("../utils/sendMail");

async function verified(req, res){
  try {
    const { email, name } = req.body;

    const user = email;
    const subject = `Successful verification of documents.`;
    const template = `Hello ${name}! Your document has been verified succesfully. Visit your profile for more info.`;

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
    const template =`Hello ${name}! Please Re-upload a clear image of your document for verification.`
    //sending mail:
    mailSender(res, user, subject, template);
  } catch (err) {
    console.log(err);
  }
};

module.exports={verified,reupload}