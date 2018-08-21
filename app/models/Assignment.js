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
    },
    updateAssignment(assignment) {
      return db.one(`
      UPDATE assignments
      SET 
      name = $/name/,
      date = $/date/,
      github_link = $/github_link/,
      type = $/type/,
      unit = $/unit/
      WHERE id = $/id/
      RETURNING *
      `, assignment);
    },
    createAssignment(assignment) {
      return db.one(`
      INSERT INTO assignments
      (name, date, type, unit, github_link)
      VALUES
      ($/name/, $/date/, $/type/, $/unit/, $/github_link/)
      RETURNING *
      `, assignment);
    },
    destroy(id) {
      return db.none(`
          DELETE FROM assignments
          WHERE id = $1
        `, id)
      }
}

