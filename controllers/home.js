const express = require('express');
const router = express.Router();
const methoOverride = require('method-override');


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}


function chceckNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {  
	 return res.redirect('/login');
    }
}

router.get('/', (req, res) => {
    res.render('index', {
        title: 'U Pepegy',
        style: 'home.css'
    })
})

//odhlášení ze sesion
router.delete('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})







module.exports = router;