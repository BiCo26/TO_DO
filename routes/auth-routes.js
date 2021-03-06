

const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login', {
    currentPage: 'login', // this is specific to the TO_DO app bc of the CSS setup
  });
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register', {
    currentPage: 'register', // see above
  });
});

// When the user posts to the /auth/register route, the browser will send all 
// the data contained in the form field to our express server. Our route middleware
//  will then create a new user with that data.

authRouter.post('/register', usersController.create);