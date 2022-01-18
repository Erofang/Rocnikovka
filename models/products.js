const db = require('../database')


exports.showProduct = function () {
    let sql = 'SELECT nazev, cena, popis FROM vyrobky';

    db.query(sql, function (err, results, fields) {
        if (err) {
            throw err;
        }
    })


}