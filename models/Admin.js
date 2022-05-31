const db = require('../database');

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

//smazání produktu
exports.deleteProduct = (ID) => {
    return new Promise((resolve, reject) => {
		try {
			let sql = 'DELETE FROM vyrobky WHERE id_vyr = ?';
			db.query(sql, ID, (err, results) => {
				if (err) throw err;
				resolve(results);
			});
		} catch (err) {
			reject(err);
		}
	});
};

// Přidávání produktu
exports.addProduct = (nazev, cena, popis, druhy) => {
	let sql = `INSERT INTO vyrobky(nazev, cena, popis, id_dru) VALUES ('${nazev}','${cena}', '${popis}','${druhy}')`;
	db.query(sql, (err) => {
		if (err) throw err;
	});
};

exports.editProductShow = (ID) => {
	return new Promise((resolve, reject) => {
		try {
			let sql = 'SELECT * FROM vyrobky WHERE id_vyr = ?';
			db.query(sql, ID, (error, results) => {
				if (error) throw error;
				resolve(results);
			});
		} catch (err) {
			reject(err);
		}
	});
};

exports.editProduct = (nazev, cena, popis, druhy, ID) => {
	return new Promise((resolve, reject) => {
		try {  let sql = `UPDATE vyrobky SET nazev = '${nazev}', cena = '${cena}', popis = '${popis}', id_dru = '${druhy}' WHERE id_vyr = '${ID}'`;
		db.query(sql, (err) => {
			if (err) throw err;
			resolve(true);
		});
	} catch (err) {
		reject(err);
		}
	});
};
