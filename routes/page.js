const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const product = require('../models/products')

//routa na hlavní stránku
router.get('/',  async (req, res, ) => {
    const data =   await product.showProduct();
    res.render('home',{
        title: 'Hlavní stránka',
        style: 'home.css',
        product: data
    })
})

//routa na register
router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Registrace',
        style: 'register.css'
    })
})

//routa na login
router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Přihlášení',
        style: 'login.css'
    })
})

router.get('/profile', (req, res) => {
    res.render('profile', {
        title: 'Profil',
        style: 'profile.css'
    })
})





module.exports = router;