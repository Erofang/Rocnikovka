const db = require('../database');

exports.editProfile = () => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `UPDATE zakaznici SET jmeno='${jmeno}',prijmeni='${prijmeni}',mobil='${telefon}',email='${email}',heslo='${hashedPassword}' WHERE id_zak = ?'`;
        } catch (err) {

        }
    })
}