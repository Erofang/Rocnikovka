const db = require('../database');


exports.showProfileInfo =  (ID) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `SELECT * FROM zakaznici WHERE id_zak = ${ID}`;
			console.log(ID)
            db.query(sql, ID, (error, results) => {
                if (error) throw error;
                resolve(results);
            })
        } catch(err){
            reject(err);
        }
    })
}


exports.editProfile = (jmeno, prijmeni, mobil, email, ID) => {
	return new Promise((resolve, reject) => {
		try {  let sql = `UPDATE zakaznici SET jmeno = '${jmeno}', prijmeni = '${prijmeni}', mobil = '${mobil}', email = '${email}'  WHERE id_zak = '${ID}'`;
		db.query(sql, (err) => {
			if (err) throw err;
			resolve(true);
		});
	} catch (err) {
		reject(err);
		}
	});
};

exports.editPassword = (hashedPassword, ID) => {
	return new Promise((resolve, reject) => {
		try {  let sql = `UPDATE zakaznici SET  heslo = '${hashedPassword}'  WHERE id_zak = '${ID}'`;
		db.query(sql, (err) => {
			if (err) throw err;
			resolve(true);
		});
	} catch (err) {
		reject(err);
		}
	});
};