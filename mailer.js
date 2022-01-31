const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const emails = require("./emails");

let transporter = nodemailer.createTransport({
  name: process.env.MAIL_HOST,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secureConnection: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    ciphers: process.env.MAIL_CIPHERS,
  },
});

export default async function sendContactEmail(
  email,
  firstName,
  lastName,
  organizationName,
  phoneNumber,
  message
) {
  transporter.sendMail(
    emails.makeContactEmail(
      email,
      firstName,
      lastName,
      organizationName,
      phoneNumber,
      message
    ),
    (err, info) => {
      if (err) {
        console.log("ERROR: ", err.message);
        return;
      }
      transporter.close();
    }
  );
}
