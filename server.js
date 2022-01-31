const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const conn = require('./database')





const app = express();
//lifehack xd xd
const homeRouter = require('./controllers/home');
const productRouter = require('./controllers/product')
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');
const profileRouter = require('./controllers/profile');


//nastavení handlebars
app.engine('hbs', exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './views')


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static routa na css
const styly = path.join(__dirname, 'styly');
app.use(express.static('./styly'));

//základní routa
app.use('/', homeRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);




const PORT = 5005;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));