const express = require('express');
const router = express.Router();
const Product = require('../models/Product');




//routa na hlavní stránku
router.get('/',  async (req, res ) => {
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    res.render('product/index',{
        title: 'Hlavní stránka',
        style: 'home.css',
        Food: dataFood,
        Drink: dataDrink
    })
})






module.exports = router;