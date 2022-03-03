const express = require('express');
const router = express.Router();


function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}


router.get('/', isLoggedIn, (req, res) => {
    res.render('index', {
        title: 'U Pepegy',
        style: 'home.css'
    })
})








module.exports = router;