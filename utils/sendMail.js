const nodeMailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE;
var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();



const mailSender = async (res, receiver, subject, template) => {

  const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    from:process.env.EMAIL_USERNAME
  });

  try {
    const info = transporter.sendMail(
      {
        from: process.env.EMAIL_USERNAME,
        to: receiver,
        subject: subject,
        text: template,
      },
      function (err, info) {
        if (err) {
          throw err;
        }
        console.log("response:", info.response, "message:", info.messageId);
        return res.status(250).json({
          success: true,
          message: `Email sent to ${receiver} succesfully!`,
        });
      }
    );

    // const msg = {
    //   to: "aryanagrawal20023@gmail.com", // Change to your recipient
    //   from: "sihantons@gmail.com", // Change to your verified sender
    //   subject: 'Sending with SendGrid is Fun',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log('Email sent')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })

  } catch (err) {
    console.log("Error in sending mail:", err);
  }
};

module.exports = mailSender;
