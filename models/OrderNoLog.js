const db = require('../database')





exports.order =  (uzivatel, mobil, email, adresa, mesta) => {
            let sql = `INSERT INTO objednavky(id_zak, id_mesta, ulice_cislo, tel, mail) VALUES ('${uzivatel}','${mesta}', '${adresa}','${mobil}','${email}')`;
            db.query(sql, err => {
                if (err) throw err;
            })  
}