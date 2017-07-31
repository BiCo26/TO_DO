// import all necessary npm packages
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
//method override for editing
const methodOverride = require('method-override');
//cookie parser used for authentication
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// initializes app
const app = express();

require('dotenv').config();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    //environmental var
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 2626;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Using Port ${port} !`);
});

// Our index route!
app.get('/', (req, res) => {
  res.render('index', {
    message: 'Welcome to your To Do List!',
    currentPage: 'home',
    documentTitle: 'To Do List',
    subTitle: 'What is on the agenda today?',
  });
});

// import & use our TO_DO /routes 
const To_DoRoutes = require('./routes/TO_DO-routes');
app.use('/TO_DOS', To_DoRoutes);

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});