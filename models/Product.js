const db = require('../database')

//sql na zobrazení tabulky produktů na mani page
exports.showProductFood =  () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = 'SELECT * FROM vyrobky where id_dru = 1'
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
            let sql = 'SELECT * FROM vyrobky where id_dru = 2'
            db.query(sql, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
}

exports.deleteProduct = (ID) => {
    return new Promise((resolve, reject) => {
		try {
			let sql = 'DELETE FROM vyrobky WHERE id = ?';
			conn.query(sql, ID, (err, results) => {
				if (err) throw err;
				resolve(results);
			});
		} catch (err) {
			reject(err);
		}
	});
};

