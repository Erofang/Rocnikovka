const mysql = require('mysql');
//Připojení na db

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurace'
});

conn.connect(function (err){
    if (err) throw err;
    console.log('databáze je připojena');
});



module.exports = conn;
