const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config({path:'./.env'});
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const methoOverride = require('method-override')
const db = require('./database')
const multer = require('multer');







const app = express();
//nastavení cest
const homeRouter = require('./controllers/home');
const profileRouter = require('./controllers/profile');
const orderRouter = require('./controllers/order');
const orderNoLogRouter = require('./controllers/orderNoLog');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');
const adminRouter = require('./controllers/admin');


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

//static routa na public
app.use(express.static(__dirname + '/public'));




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
app.use(methoOverride('_method'))


app.use(function (req, res, next) {
	res.locals.login = req.isAuthenticated();
	next();
  });

  function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}





//základní routa
app.use('/', homeRouter);
app.use('/profile', isLoggedIn,profileRouter);
app.use('/order', orderRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/admin', isLoggedIn, adminRouter);




const PORT = 5005;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));

