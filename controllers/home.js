const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        title: 'U Pepegy',
        style: 'home.css'
    })
})








module.exports = router;