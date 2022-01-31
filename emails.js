const dotenv = require("dotenv");

function makeContactEmail(
  emailAddr,
  firstName,
  lastName,
  organizationName,
  phoneNumber,
  message
) {
  let email = {
    from: `BRID Web Admin <${process.env.MAIL_USER}>`,
    to: `<siriwan@bridsystems.com>`,
    subject: "New Contact",
    text: `New contact info (first name, last name, organization name, phone number, email, message): ${firstName}, ${lastName}, ${organizationName}, ${phoneNumber}, ${emailAddr}, ${message}`,
  };

  return email;
}

module.exports = {
  makeContactEmail,
};
