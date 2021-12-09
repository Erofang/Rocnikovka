const express = require('express');
const router = express.Router();

//routa na hlavní stránku
router.get('/', (req, res) => {
    res.render('server',{
        title: 'Hlavní stránka',
        style: 'server.css'
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

router.get('/pica', (req, res) => {
    res.render('pica', {
        title: 'Přihlášení',
        style: 'pica.css'
    })
})





module.exports = router;