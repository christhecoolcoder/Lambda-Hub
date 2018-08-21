const { db, pgp } = require('../config/connection');

module.exports = {

  index() {
    return db.manyOrNone(
      `SELECT *
      FROM assignments`
    )
  },
    findById(id) {
      return db.one(`
      SELECT *
      FROM assignments
      WHERE id = $1
      `, id);
    }
    
}

