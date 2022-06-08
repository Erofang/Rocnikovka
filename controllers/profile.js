const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    const id = req.user.id_zak;
    let data = await Profile.showProfileInfo(id)
    res.render('profile/index', {
        title: 'Profil',
        style: 'profile.css',
        profile: data[0],
    })
});

router.post('/', async (req, res) => {
    const { jmeno, prijmeni, mobil, email, heslo, id } = req.body;
	console.log(req.body);
    const hashedPassword = await bcrypt.hash(heslo, 10);
    await Profile.editProfile( jmeno, prijmeni, mobil, email, id );
	res.redirect('/')
});

router.get('/noveHeslo', async (req, res) => {
    const id = req.user.id_zak;
    let data = await Profile.showProfileInfo(id)
    res.render('profile/noveHeslo', {
        title: 'NoveHeslo',
        style: 'noveHeslo.css',
        profile: data[0],
    })
})


router.post('/noveHeslo', async (req, res) => {
    
    const { heslo, id } = req.body;
	console.log(req.body);
    const hashedPassword = await bcrypt.hash(heslo, 10);
    await Profile.editProfile( hashedPassword, id );
    res.redirect('/profile')
})




module.exports = router;