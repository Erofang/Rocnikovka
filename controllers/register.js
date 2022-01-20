const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Register = require('../models/Register');



router.post('/register', async(req, res) => {
    const {jmeno, prijmeni, mobil, email, password} = req.body
    console.log(req.body)

    //zašifrování hesla
    const hashedPassword =  bcrypt.hashSync(password, 10);
    console.log(hashedPassword); 
    const data = await Register.register();       

    res.redirect('register', {
        title: 'Registrace',
        style: 'register.css',
        register: data
    })
})


module.exports = router;



/* exports.register = (req, res) => {
    const {jmeno, prijmeni, mobil, email, password} = req.body
    console.log(req.body)

    //zašifrování hesla
    const hashedPassword =  bcrypt.hashSync(password, 10);
    console.log(hashedPassword);         
} */
        
    

