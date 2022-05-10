const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const Register = require('../models/Register');






function chceckNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {  
	 return res.redirect('/');
    }
    next();
}


//register page
router.get('/', chceckNotAuthenticated, (req, res) => {
    res.render('register/index', {
        title: 'Registrace',
        style: 'register.css'
    })
})
//poslaní formu na register page
router.post('/', chceckNotAuthenticated, async (req, res) =>{
  const output = `
    <p>Ověření registrace</p>
    <h3>Registrace</h3>
      <p>Byl jste zaregistrovan na strance restaurace U Pepegy</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'alisha.weissnat52@ethereal.email', 
      pass: '5hZ4YaBM4Mz12897cZ', 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"U Pepegy" <Upepgy@seznam.cz>', // sender address
    to: `${req.body.email}`, 
    subject: "Registrace", 
    text: "Hello world?", 
    html: output, 
  });

  console.log("Message sent: %s", info.messageId);
 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    try {
        const {jmeno,prijmeni, mobil, email, password} = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        Register.register(jmeno, prijmeni, mobil, email, hashedPassword);
        res.redirect('/login')
    } catch {
        res.redirect('/')
    }
    
});



module.exports = router;



 
    

