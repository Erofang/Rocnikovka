const db = require('../database')





exports.register = (req, res) => {
    let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}')`;
    db.query(sql, (err, result) => {
        if(err) {
            console.log(err);
        }else {
            return res.redirect('/');
     }
})
}


/* exports.register = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}')`;
            db.query(sql, (error, results) => {
                if(error) throw error;
                resolve(results);
            })
        }catch(err) {
            reject(err);
        }
    });
} */