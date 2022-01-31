const db = require('../database');



exports.login = (email) => {
    let sql = `SELECT * FROM zakaznici WHERE email = '${email}'`
    db.query(sql, err => {
        if (err) throw err;
    })
}