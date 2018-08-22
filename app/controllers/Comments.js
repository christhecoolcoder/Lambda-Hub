const CommentModel = require('../models/Comment');

module.exports = {
  getAll(req, res, next) {
    CommentModel.index()
      .then(comments => {
        res.locals.comments = comments;
        next();
      })
      .catch(next);
    },
    createComment(req, res, next) {
      const data = {
        assignment_id: parseInt(1),
        comment: req.body.comment,
      }
    
      CommentModel.createComment(data)
        .then(comment => {
          res.locals.comment = comment;
          next();
        });
     },
     update(req, res, next) {
      const data = {
        assignment_id: parseInt(req.body.assignment_id),
        comment: req.body.comment,
        
      };

      CommentModel.update(data)
      .then(comment => {
        res.locals.comment = comment;
        next();
      });
    }
}


