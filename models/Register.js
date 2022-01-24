
const db = require('../database')




//sql na vložení do db
exports.register =  (jmeno, prijmeni, mobil, email, hashedPassword) => {
            let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}')`;
            db.query(sql, err => {
                if (err) throw err;
            })  
}


