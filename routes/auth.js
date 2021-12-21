const express = require('express')
const registo = require('../controllers/register')
const loginos = require('../controllers/login')

const router = express.Router()

//routa na register
router.post('/register', registo.register)
router.post('/login', loginos.login)



module.exports = router