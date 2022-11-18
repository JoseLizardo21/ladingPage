const express = require("express");
const path = require("path");
const {engine} = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');
const database = require('./keys');

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//midlewars
app.use(session({
    secret: 'akaakka',
    resave: false,
    saveUninitialized: false,
}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(flash());


//Global variables 
app.use((req,res,next)=>{
    app.locals.success = req.flash('Success');
    app.locals.MesCorreoRe = req.flash('MesCorreoRe');
    app.locals.user = req.user;
    next();
});

//routes
app.use(require("./routes/links"));

//public
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
});