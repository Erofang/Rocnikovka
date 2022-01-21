const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');




//routa na hlavní stránku
router.get('/',  async (req, res, ) => {
    const data =   await Product.showProduct();
    res.render('index',{
        title: 'Hlavní stránka',
        style: 'home.css',
        product: data
    })
})


/* router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Registrace',
        style: 'register.css'
    })
})

router.post('/register', (req, res) => {

}) */

/* router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Přihlášení',
        style: 'login.css'
    })
})

router.post('/login', (req, res) => {

}) */




module.exports = router;