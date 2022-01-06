const db = require('../database')
const bcrypt = require('bcrypt')



exports.register = (req, res) => {
    const {jmeno, prijmeni, mobil, email, password} = req.body
    console.log(req.body)

    //zašifrování hesla
    const hashedPassword =  bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
        //vložíme hodnoty z formuláře do databaze
        let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}')`;
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err);
            }else {
                return res.redirect('/');
         }
    })  
}
        
    

