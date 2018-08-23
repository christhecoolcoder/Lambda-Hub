const pgp = require('pg-promise')();

const opts = process.env.DATABASE_URL || {
  database: 'lambda_hub'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};
