const { db, pgp } = require('../config/connection');

module.exports = {

    index(id) {
        return db.manyOrNone(
          `SELECT *
          FROM comments
          WHERE assignment_id = $1`
          , id);
    },

    post(comment, id) {
        return db.one(`
        INSERT INTO comments
        (name, comment, assignment_id)
        VALUES
        ($/name/, $/comment/, $/assignment_id/)
        RETURNING *
        `, comment, id);
    },
    destroy(id) {
        return db.none(`
        DELETE FROM comments
        WHERE id = $1
        `, id)
    }
}
