const db = require('../database');
const bcrypt = require('bcrypt');


exports.login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query(
        
    )
}