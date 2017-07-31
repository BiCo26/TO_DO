

const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);


  Sets up the DB w/  proper DB name & port
  && returns a pg-promise instance

function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'TO_DO',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
}

function setAPI() {
    if (environment === 'development') {
    ENV.myAPIkey = process.env.APIkey;
  }
}

const db = setDatabase();

module.exports = db;