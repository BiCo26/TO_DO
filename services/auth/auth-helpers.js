// This file will contain various helper functions that we use throughout our app.
// For now, we are just going to add a function that will use bcrypt to compare passwords.
// Add the following code:

const bcrypt = require('bcryptjs');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}