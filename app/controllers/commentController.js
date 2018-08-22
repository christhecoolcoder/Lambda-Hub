const db = require('../models/Comment');

module.exports = {

    getAll(req, res, next) {
        db.index(req.params.id)
          .then(comments => {
            res.locals.comments = comments;
            next();
          })
          .catch(next);
      },

    postComment(req, res, next) {
        const data = {
            assignment_id: req.params.id,
            name: req.body.name,
            comment: req.body.comment
        }

        db.post(data)
            .then(comment => {
                res.locals.comment = comment;
                next();
            })
            .catch(next);
    },

    destroy(req, res, next) {
        db.destroy(req.params.id)
            .then(() => {
            next();
            })
            .catch(next);
    }

}