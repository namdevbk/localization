var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var i18n = require('i18n');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

i18n.configure({

//define how many languages we would support in our application
locales:['en', 'zh'],

//define the path to language json files, default is /locales
directory: __dirname + '/locales',

//define the default language
defaultLocale: 'en',

// define a custom cookie name to parse locale settings from
cookie: 'i18n'
});

app.use(cookieParser("i18n_demo"));

app.use(session({
    secret: "i18n_demo",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

//init i18n after cookie-parser
app.use(i18n.init);

app.get('/', function (req, res) {
    res.setLocale(req.cookies.i18n);
    res.render('main', {
    i18n: res
    })
});

app.get('/contact', function (req, res) {
    res.render('contact', {
    i18n: res
    })
});

app.get('/zh', function (req, res) {
    res.cookie('i18n', 'zh');
    res.redirect('/')
});

app.get('/en', function (req, res) {
    res.cookie('i18n', 'en');
    res.redirect('/')
});

app.listen(8080);
