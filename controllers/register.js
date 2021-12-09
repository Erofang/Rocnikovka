const db = require('../database')
const bcrypt = require('bcrypt')

        exports.register = (req, res) => {
   const {jmeno, prijmeni, mobile, email, password} = req.body


    sql = `INSERT INTO zakaznici(jmeno, prijmeni, tel_cislo, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobile}','${email}','${password}')`
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }else {
            console.log(result)
            res.redirect('/')
        }
    })
}


