const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');



//routa na hlavní stránku
router.get('/',  async (req, res, ) => {
    const data =   await Product.showProduct();
    res.render('home',{
        title: 'Hlavní stránka',
        style: 'home.css',
        product: data
    })
})


module.exports = router;