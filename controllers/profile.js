const express = require('express');
const router = express.Router();
const path = require('path');
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
const multer = require('multer');


router.get('/', async (req, res) => {
    const id = req.user.id_zak;
    let data = await Profile.showProfileInfo(id)
    res.render('profile/index', {
        title: 'Profil',
        style: 'profile/profile.css',
        profile: data[0],
    })
});

router.post('/', async (req, res) => {
    const { jmeno, prijmeni, mobil, email, id } = req.body;
	console.log(req.body);
    /* const hashedPassword = await bcrypt.hash(heslo, 10); */
    await Profile.editProfile( jmeno, prijmeni, mobil, email, id );
	res.redirect('/profile')
});



router.get('/noveHeslo', async (req, res) => {
    const id = req.user.id_zak;
    let data = await Profile.showProfileInfo(id)
    res.render('profile/noveHeslo', {
        title: 'NoveHeslo',
        style: 'profile/noveHeslo.css',
        profile: data[0],
    })
})

router.post('/noveHeslo', async (req, res) => {
    const { heslo, id } = req.body;
	console.log(req.body);
    const hashedPassword = await bcrypt.hash(heslo, 10);
    await Profile.editPassword( hashedPassword, id );
    res.redirect('/profile')
})





router.get('/profilePic', (req, res) => {
	res.render('profile/profilePic', {
		title: 'Update profile picture',
		style: 'profile/profilePic.css',
	});
});

// Multer Middleware
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/profilePics');
	},

	filename: (req, file, cb) => {
		console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

router.post('/profilePic', upload.single('image') ,async (req, res) => {
    if (!req.file) {
        console.log('no file found')
    } else {
        console.log(req.file.filename)
        const image = req.file.filename;
        const id = req.user.id_zak;
        await Profile.editImage( image, id );
        res.redirect('/profile')
    }
})






module.exports = router;