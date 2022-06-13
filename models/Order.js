
const db = require('../database')




//sql na vložení do db
exports.order =  (uzivatel, mobil, email, adresa, mesta) => {
            let sql = `INSERT INTO objednavky(jmeno, prijmeni, mobil, email, heslo, image) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}','${image}')`;
            db.query(sql, err => {
                if (err) throw err;
            })  
}


