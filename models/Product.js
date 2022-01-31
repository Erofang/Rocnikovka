
const db = require('../database')

//sql na zobrazení tabulky produktů na mani page
exports.showProduct =  () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = 'SELECT nazev, cena, popis FROM vyrobky'
            db.query(sql, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
} 