const db = require('../database');
const bcrypt = require('bcrypt');


exports.login = (req, res) => {
    const {email, password} = req.body;

    db.query(
		// Hledání stejného emailu v databázi
		'SELECT email FROM zakaznici WHERE email = ?',
		[email],
		async (err, results) => {
			if (err) throw err;
			// Pokud se email nenašel, napíše se zpráva dole
			if (results.length == 0) {
				return res.redirect('/login');
			} else {
				const hashedPassword = results[0].password;
				// get the hashedPassword from result
				// Porovnávání hesla s hasnutym heslem
				if (await bcrypt.compare(password, hashedPassword)) {
					return res.render('/');
					// Když se nenajde, pošle se "password incorrect"
				} else {
					return res.render('/login')
				}
			}
		}
	);
}