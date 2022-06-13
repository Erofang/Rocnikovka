const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('objOk/index', {
        title: 'checkout',
        style: 'objOk.css',
    })
});





module.exports = router;