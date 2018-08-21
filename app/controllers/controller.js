const db = require('../models/Assignment');

module.exports = {
  getAll(req, res, next) {
    db.index()
      .then(assignments => {
        res.locals.assignments = assignments;
        next();
      })
      .catch(next);
  },
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then(assignment => {
        res.locals.assignment = assignment;
        next();
      })
      .catch(next);
  }
}