const express = require('express');
const router = express.Router();
const product = require('../models/products')

//routa na hlavní stránku
router.get('/', (req, res, ) => {
    const data = products.showProduct();
    res.render('home',{
        title: 'Hlavní stránka',
        style: 'home.css',
        table: data
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

router.get('/test', (req, res) => {
    res.render('test', {
        title: 'Přihlášení',
        style: 'test.css'
    })
})





module.exports = router;