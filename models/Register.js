
const db = require('../database')




//sql na vložení do db
exports.register =  (jmeno, prijmeni, mobil, email, hashedPassword, image) => {
            let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo, image) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}','${image}')`;
            db.query(sql, err => {
                if (err) throw err;
            })  
}


