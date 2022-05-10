const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/:IDkategorie?', async (req, res) => {
    //const dataFood =   await Product.showProductFood();
    //const dataDrink = await Product.showProductDrink();
    const { IDkategorie } = req.params;
    
      

    

    if(IDkategorie === undefined){
        const produkty = null;
        res.render('order/index', {
            title: 'Order',
            style: 'order.css',
            script: 'store.js',
            Produkty: produkty
        })
    }
    else if (parseInt(IDkategorie) === 1) {
        const produkty = await Product.showAllProducts(parseInt(IDkategorie));
        res.render('order/index', {
            title: 'Order',
            style: 'order.css',
            script: 'store.js',
            Produkty: produkty
        })
    }else if (IDkategorie === 2) {
        const produkty = await Product.showAllProducts(parseInt(IDkategorie));
        res.render('order/index', {
            title: 'Order',
            style: 'order.css',
            script: 'store.js',
            Produkty: produkty
        })
    }
   

    
    
})








module.exports = router;