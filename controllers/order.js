const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Product = require('../models/Product');
const Order = require('../models/Order');



router.get('/', async (req, res) => {
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    /* console.log(dataFood); */
    res.render('order/index', {
        title: 'Order',
        style: 'order.css',
        script: 'cart.js',
        Food: dataFood,
        Drink: dataDrink,
    })
})

 
router.post('/', async (req, res) => {
    const output = `
    <p>Ověření registrace</p>
    <h3>Objednávka</h3>
      <p>Objednávka byla uspěšná</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'alisha.weissnat52@ethereal.email', 
      pass: '5hZ4YaBM4Mz12897cZ', 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"U Pepegy" <Upepgy@seznam.cz>', // sender address
    to: `${req.user.email}`, 
    subject: "Objednávka", 
    text: "Hello world?", 
    html: output, 
  });

   console.log("Message sent: %s", info.messageId);

   try {

    const uzivatel = req.user.id_zak;
    const mobil = req.user.mobil;
    const email= req.user.email;
    const {adresa, mesta} = req.body;
    console.log(adresa, mesta);
    Order.order(uzivatel, mobil, email, adresa, mesta)
    res.redirect('/admin')

   } catch {
    res.redirect('/')
   }
});



module.exports = router;