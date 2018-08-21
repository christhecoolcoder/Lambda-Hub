const { db, pgp } = require('../config/connection');

module.exports = {
  create(comment) {
    return db.one(`
      INSERT INTO comments (assignment_id, comment, created_at)
      VALUES ($/assignment_id/, $/comment/, now() )
      RETURNING *
    `, comment);
  },

  index() {
    return db.manyOrNone(
      `SELECT *
      FROM comments`
    );
  },

  update(comment) {
    return db.one(`
    UPDATE comments
    SET 
    comment=$/comment/
    WHERE id = $/id/
    RETURNING *
    `, comment);
  },
  
  destroy(id) {
    return db.none(`
      DELETE FROM comments
      WHERE id = $1
    `, id);
  },
};

// module.exports.index().then(comment => console.log(comment));
// module.exports.findById(2).then(assignment => console.log(assignment));
// module.exports.create({assignment_id: 1, comment: 'Soda Lab comment'}).then(comment => console.log(comment));
// module.exports.update({ id: 2, comment: 'Some newly updated assignment' }).then(comment => console.log(comment));
// module.exports.destroy(0).then(comment => console.log(comment));