const db = require('../database')

//sql na zobrazení tabulky produktů na mani page
exports.showProductFood =  () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = 'SELECT nazev, cena, popis FROM vyrobky where id_dru = 1'
            db.query(sql, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
}

exports.showProductDrink =  () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = 'SELECT nazev, cena, popis FROM vyrobky where id_dru = 2'
            db.query(sql, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
}
