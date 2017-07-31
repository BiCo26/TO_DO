
//user.js

const db = require('../db/config');
const User = {};

User.findByUserName = (username) => {`
  SELECT * FROM users
  WHERE username = $1
  `, [username]);
}
User.create = (user) => {
  return db.one(`
  INSERT INTO users
  (username, password_digest, email`)
  VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
};

module.exports = User;
}