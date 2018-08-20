const pgp = require('pg-promise')();

const opts = {
  database: 'lamda_db'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};
