const nodemailer = require('nodemailer');




let transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'Upepegy@seznam.cz', 
      pass: 'tvojemama123', 
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Upepegy" <Upepegy@seznam.cz>', // sender address
    to: "matous.kader@seznam.cz", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error)
      }
  })


  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
