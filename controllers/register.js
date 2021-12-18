const db = require('../database')
const bcrypt = require('bcrypt')

<<<<<<< Updated upstream
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


=======
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
        
    

>>>>>>> Stashed changes
