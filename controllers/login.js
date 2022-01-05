const db = require('../database');
const bcrypt = require('bcrypt');




exports.login = (req, res) => {
	const {email, password} = req.body;
	console.log(req.body);

	db.query(`SELECT * FROM zakaznici WHERE email = '${email}'`),
	(err, email, password, result) => {
		if(err) {
			console.log(err);
		}else if(email == result[i].email && bcrypt.verify(password, result[i].heslo)){
			console.log(password);
			return res.redirect('/');
		}
	}
}