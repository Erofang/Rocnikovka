/* nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.email_pass
  }
});

var mailOptions = {
  from: 'Upepegy',
  to: 'matous.kader@seznam.cz',
  subject: 'Funguje to?',
  text: 'Tvoje mama'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  }
}); */