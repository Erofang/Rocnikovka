const express = require('express')
const registo = require('../controllers/register')

const router = express.Router()

//routa na register
router.post('/register', registo.register)



module.exports = router