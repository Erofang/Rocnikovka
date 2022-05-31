const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.get('/', (req, res) => {
    res.render('profile/index', {
        title: 'Profil',
        style: 'profile.css',
        name: req.user.jmeno,
        surname: req.user.prijmeni,
        tel: req.user.mobil,
        email: req.user.email, 
    })
})





module.exports = router;