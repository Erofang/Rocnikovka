const express = require('express');
const router = express.Router();
const Product = require('../models/Admin');




router.get('/',async (req, res)=>{
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    res.render('admin/index', {
        title: 'Admin',
        style: 'admin.css',
        Food: dataFood,
        Drink: dataDrink
    })
})




module.exports = router;