const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');


const app = express();
const Login = require('../models/Login');
const db = require('../database');
/* const initializePassport = require('../passport-config');


app.use(flash());
app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session()); */

//login page
router.get('/', (req, res) => {
    res.render('login/index', {
        title: 'Přihlášení',
        style: 'login.css'
    })
})
//poslaní formu na login page
/* router.post('/', passport.authenticate('local', {
	successRedirect: 'index',
	failureRedirect: 'login',
	failureFlash: true
})) */



module.exports = router;
