const db = require('../database')
const bcrypt = require('bcrypt')

    exports.register = (req, res) => {
        const {jmeno, prijmeni, mobile, email, password} = req.body
        //vezme email z databaze a porovna s tim co uživatel zadává jestli už existuje
        db.query(`SELECT COUNT(*) AS cnt FROM zakaznici WHERE email = ? ` ,
        req.body.email , (err, res) => {
            if(err) {
                console.log(err);
            }else {
                if(res.length > 0) {
                    return res.render('register',{
                        message: 'Tento email už existuje'
                    });
                }else {
                    //vložíme hodnoty z formuláře do databaze
                    db.query(`INSERT INTO zakaznici(jmeno, prijmeni, tel_cislo, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobile}','${email}','${password}'`, 
                    (err, res) => {
                        if(err) {
                            console.log(err);
                        }else {
                            return res.render('/',{
                                message: 'Účet založen'
                            });
                        }
                    })

                }
            }
        })
    }


            //vytvoříme sql příkaz navuložení do db
        //var sql = `INSERT INTO zakaznici(jmeno, prijmeni, tel_cislo, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobile}','${email}','${password}')`
        //db.query(sql, (err, result) => {
            //if (err) {
            //    throw err;
           // }else {
            //    console.log(result)
          //      res.redirect('/login')
        //    }
      //  })