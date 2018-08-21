const pgp = require('pg-promise')();

const opts = {
  database: 'lambda_hub'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};
