const nodemailer = require('nodemailer')
require('dotenv').config()


const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'alisha.weissnat52@ethereal.email',
      pass: '5hZ4YaBM4Mz12897cZ'
  }
});

const mailSender = async () => {
    
    
    const mailOptions = {
        from: 'Upepegy@seznam.cz',
        to: 'Tvoje@mama.cz',
        subject: 'Registrace',
        text: `Tvoje Máma`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) throw err
    })

}


module.exports = {
    mailSender
}






