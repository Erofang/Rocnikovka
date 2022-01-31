const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');


router.get('/', (req, res) => {
    res.render('profile/index', {
        title: 'Profil',
        style: 'profile.css'
    })
})



module.exports = router;