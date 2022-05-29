const express = require('express');
const router = express.Router();
const Product = require('../models/Product');





router.get('/', async (req, res) => {
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    /* console.log(dataFood); */
    res.render('order/index', {
        title: 'Order',
        style: 'order.css',
        script: 'store.js',
        Food: dataFood,
        Drink: dataDrink
    })
})








module.exports = router;