const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Register = require('../models/Register');



//register page
router.get('/', (req, res) => {
    res.render('register/index', {
        title: 'Registrace',
        style: 'register.css'
    })
})
//poslaní formu na register page
router.post('/', async (req, res) =>{
    try {
        const {jmeno,prijmeni, mobil, email, password} = req.body;
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        Register.register(jmeno, prijmeni, mobil, email, hashedPassword);
        res.redirect('/login')
    } catch {
        res.redirect('/')
    }
});

/* exports.register = (req, res) => {
    const {jmeno, prijmeni, mobil, email, password} = req.body
    console.log(req.body)

    //zašifrování hesla
    const hashedPassword =  bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
        //vložíme hodnoty z formuláře do databaze
        let sql = `INSERT INTO zakaznici(jmeno, prijmeni, mobil, email, heslo) VALUES ('${jmeno}','${prijmeni}', '${mobil}','${email}','${hashedPassword}')`;
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err);
            }else {
                return res.redirect('/');
         }
    })  
}
 */
module.exports = router;



 
    

