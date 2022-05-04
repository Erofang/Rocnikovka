const express = require('express');
const router = express.Router();






router.get('/', (req, res) => {
    res.render('order/index', {
        title: 'Order',
        style: 'order.css'
    })
})








module.exports = router;