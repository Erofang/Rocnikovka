const express = require('express');
const router = express.Router();
const Product = require('../models/Admin');




router.get('/',async (req, res)=>{
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    res.render('admin/index', {
        title: 'Admin',
        style: 'admin/admin.css',
        Food: dataFood,
        Drink: dataDrink
    })
})
//cesta na pridavaci form
router.get('/addproduct', (req, res) => {
	res.render('admin/addProduct', {
        title: 'Add Product',
		style: 'admin/addProduct.css'
	});
});

//pridani produktu
router.post('/addProduct', async (req, res) => {
	try {
		const { nazev, cena, popis, druhy} = req.body;
		console.log(req.body)
		Product.addProduct(nazev, cena, popis, druhy)
		res.redirect('/admin');
	} catch {
		res.redirect('/admin/addProduct');
	}
});

/* router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
	await Product.deleteProduct(id, function (data) {
		res.redirect('/admin');
	});
	res.redirect('back');
}); */




module.exports = router;