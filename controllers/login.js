const express = require('express');
const router = express.Router();
/* const Login = require('../models/Login.js'); */
const db = require('../database')




router.get('/', (req, res) => {
    res.render('login', {
        title: 'Přihlášení',
        style: 'login.css'
    })
})


module.exports = router;


/* exports.login = (req, res) => {
	const {email, password} = req.body;
	//console.log(email, password);
	let sql = `SELECT * FROM zakaznici WHERE email = '${email}'`
	db.query(sql,(err, result) => {
		if(err) {
			console.log(err);
		}
		console.log(result)
		for (let i = 0; i < result.length; i++) {
			if(email == result[i].email && bcrypt.compareSync(password, result[i].heslo)) {
				console.log(password);
				return res.redirect('/');
			}
			
		}
	})
} */