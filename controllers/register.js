const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
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


module.exports = router;



 
    

