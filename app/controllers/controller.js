const AssignmentModel = require('../models/Assignment');

module.exports = {
  getAll(req, res, next) {
    AssignmentModel.index()
      .then(assignment => {
        res.locals.assignment = assignment;
        next();
      })
      .catch(next);
  }
}