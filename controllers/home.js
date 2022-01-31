const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');


router.get('/', (req, res) => {
    res.render('index', {
        title: 'U Pepegy',
        style: 'home.css'
    })
})








module.exports = router;