const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const conn = require('./database')



const app = express();


//nastavení handlebars
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static routa na css
const styly = path.join(__dirname, 'styly');
app.use(express.static('./styly'));

//základní routa
app.use('/', require('./routes/page'))
app.use('/auth', require('./routes/auth'));







const PORT = 5005;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));