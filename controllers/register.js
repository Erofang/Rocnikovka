const db = require('../database')
const bcrypt = require('bcrypt')


exports.register = (req, res) => {
    const {jmeno, prijmeni, mobil, email, password} = req.body
    console.log(req.body)
        //vložíme hodnoty z formuláře do databaze
        db.query(`INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${password}')`, 
        (err, result) => {
            if(err) {
                console.log(err);
            }else {
                return res.redirect('/');
         }
    })  
}
        
    
