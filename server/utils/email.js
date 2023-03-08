const sgMail = require('@sendgrid/mail');

// Set API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, subject, text) => {
  try {
    // Create message
    const message = {
      to: email,
      from: process.env.EMAIL,
      subject,
      text,
      html: `<strong>${text}</strong>`,
    };
    // Send email
    sgMail.send(message).then(() => {
      console.log('Email sent');
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
