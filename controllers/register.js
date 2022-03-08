const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
nodemailer = require('nodemailer');
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

/* var transporter = nodemailer.createTransport({
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
  });
 */


module.exports = router;



 
    

