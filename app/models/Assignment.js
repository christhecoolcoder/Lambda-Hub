const { db, pgp } = require('../config/connection');

module.exports = {

  index() {
    return db.manyOrNone(
      `SELECT *
      FROM assignments`
    );
  }


};
module.exports.index().then(comment => console.log(comment));

