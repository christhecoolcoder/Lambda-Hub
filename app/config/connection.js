const pgp = require('pg-promise')();

let opts = process.env.DATABASE_URL || {
  database: 'lambda_hub'
};

const db = pgp(opts);

module.exports = {
  pgp,
  db
};
