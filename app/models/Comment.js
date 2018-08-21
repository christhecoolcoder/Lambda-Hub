const { db, pgp } = require('../config/conn');

module.exports = {
  create(comment) {
    return db.one(`
      INSERT INTO comments
      (assignment_id, comment, created_at)
      VALUES
      ($/assignment_id, $/comment/, now())
      RETURNING *
    `, author);
  },

  index() {
    return db.manyOrNone(
      `SELECT *
      FROM comment`
    );
  },

  update(author) {
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

// module.exports.findAll().then(assignment => console.log(assignment));
// module.exports.findById(2).then(assignment => console.log(assignment));
 module.exports.create({name: 'Soda Lab', description: 'tasty', url: 'https://git.generalassemb.ly/wdi-nyc-lambda/soda-lab'}).then(assignment => console.log(assignment));
// module.exports.update({ id: 5, name: 'Soda Lab', description: 'build up, from scratch, an app for storing and retrieving different brands of soda.', url: 'https://git.generalassemb.ly/wdi-nyc-lambda/soda-lab' }).then(assignment => console.log(assignment));
// module.exports.destroy(4).then(assignment => console.log(assignment));