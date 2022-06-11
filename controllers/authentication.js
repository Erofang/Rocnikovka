const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const db = require('../database');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');

const app = express();


passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});



passport.use(
	'local',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		(email, password, done) => {
			db.query(
				'SELECT * FROM zakaznici WHERE email = ?',
				[email],
				(err, results, req) => {
					if (err) throw err;
					// hleda uživatele v db
					if (!results.length) {
						return done(null, false, { message: 'Uživatel nenalezen' });
					}
					//porovnávání hashů
					bcrypt.compare(password, results[0].heslo, (err, isMatch) => {
						if (err) throw err;
						if (isMatch) {
							return done(null, results[0]);
						} else {
							return done(null, false, { message: 'Nesprávné heslo' });
						}
					});
				}
			);
		}
	)
);

module.exports = passport;

