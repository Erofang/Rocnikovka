const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config({path:'./.env'});
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const db = require('./database')





const app = express();
//nastavení cest
const homeRouter = require('./controllers/home');
const profileRouter = require('./controllers/profile');
const productRouter = require('./controllers/product');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');


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




//session
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

// Flash 
app.use(flash());

// Passport 
app.use(passport.initialize());
app.use(passport.session());





//základní routa
app.use('/', homeRouter);
app.use('/profile', profileRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);




const PORT = 5005;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));