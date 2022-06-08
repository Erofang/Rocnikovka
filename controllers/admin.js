const express = require('express');
const router = express.Router();
const Product = require('../models/Admin');




router.get('/',async (req, res)=>{
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
	const nick = req.user.jmeno;
    res.render('admin/index', {
        title: 'Admin',
        style: '/admin/admin.css',
        Food: dataFood,
        Drink: dataDrink,
		Nick: nick
    })
})
//cesta na pridavaci form
router.get('/addProduct', (req, res) => {
	res.render('admin/addProduct', {
        title: 'Add Product',
		style: 'admin/addProduct.css',
	});
});

//pridani produktu
router.post('/addProduct', async (req, res) => {
	try {
		const {nazev, cena, popis, druhy} = req.body;
		console.log(req.body)
		Product.addProduct(nazev, cena, popis, druhy)
		res.redirect('/admin');
	} catch {
		res.redirect('/admin/addProduct');
	}
});



//zobrazeni produktu
router.get('/edit/:id', async (req, res) => {
	var id = req.params.id;
	const data = await Product.editProductShow(id);
	console.log(data);
	res.render('admin/editProduct', {
		title: 'edit',
		style: 'admin/editProduct.css',
		product: data[0],
	});
});

//uprava produktu
router.post('/editProduct', async (req, res) => {
    const { nazev, cena, popis, druhy, id } = req.body;
	console.log(req.body);
    await Product.editProduct( nazev, cena, popis, druhy, id );
	res.redirect('/admin')
});


router.get('/deleteProduct/:id', async (req, res) => {
    const id = req.params.id;
	await Product.deleteProduct(id, function (data) {
		res.redirect('/admin');
	});
	res.redirect('back');
});




module.exports = router;