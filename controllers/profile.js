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
        heslo: req.user.heslo,
        id: req.user.id_zak
    })
    console.log(req.user.id_zak);
});

router.post('/', async (req, res) => {
    const { jmeno, prijmeni, mobil, email, heslo, id } = req.body;
	console.log(req.body);
    await Profile.editProfile( jmeno, prijmeni, mobil, email, heslo, id );
	res.redirect('/')
});





module.exports = router;