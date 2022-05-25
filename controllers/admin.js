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
router.post('/add', async (req, res) => {
	try {
		const { jmeno, prijmeni, prezdivka, email, heslo } = req.body;
		const status = 'active';
		console.log(req.body);

		const hashedPassword = await bcrypt.hash(heslo, 10);
		userModel.addUser(
			jmeno,
			prijmeni,
			prezdivka,
			email,
			hashedPassword,
			status
		);
		res.redirect('/admin/users');
	} catch {
		res.redirect('/admin/adduser');
	}
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
	await Product.deleteProduct(id, function (data) {
		res.redirect('/admin');
	});
	res.redirect('back');
});




module.exports = router;