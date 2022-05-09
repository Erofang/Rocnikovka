const express = require('express');
const router = express.Router();
const Product = require('../models/Product');






router.get('/', async (req, res) => {
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    res.render('order/index', {
        title: 'Order',
        style: 'order.css',
        Food: dataFood,
        Drink: dataDrink
    })
})








module.exports = router;