const express = require('express');
const router = express.Router();

//routa na hlavní stránku
router.get('/', (req, res) => {
    res.render('home',{
        title: 'Hlavní stránka',
        style: 'home.css'
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