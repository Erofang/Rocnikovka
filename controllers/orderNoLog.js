const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Product = require('../models/Product');
const OrderNoLog = require('../models/OrderNoLog');



router.get('/', async (req, res) => {
    const dataFood =   await Product.showProductFood();
    const dataDrink = await Product.showProductDrink();
    /* console.log(dataFood); */
    res.render('order/orderNoLog', {
        title: 'Order',
        style: 'order.css',
        script: 'cart.js',
        Food: dataFood,
        Drink: dataDrink,
    })
})

 
router.post('/', async (req, res) => {
    const output = `
    <p>Stav objednávky</p>
    <h3>Objednávka</h3>
      <p>Objednávka byla uspěšná</p>
      <p>Restaurace U Pepegy</p>
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
    to: `${req.body.email}`,
    subject: "Objednavka", 
    text: "Hello world?", 
    html: output, 
  });

   console.log("Message sent: %s", info.messageId);

   try {

    const uzivatel = 1;
    const email = req.body.email;
    console.log(email)
    const {adresa, mesta, mobil} = req.body;
    console.log(adresa, mesta);
    OrderNoLog.order(uzivatel, mobil, email, adresa, mesta)
    res.redirect('/objOk')

   } catch {
    res.redirect('/')
   }
});



module.exports = router;