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
  },
  updateAssignment(req, res, next) {
    const data = {
      id: req.params.id,
      name: req.body.name,
      date: req.body.date,
      type: req.body.type,
      unit: req.body.unit,
      github_link: req.body.github_link
    }
    db.updateAssignment(data)
      .then(assignment => {
        res.locals.assignment = assignment;
        next();
      });
  },
  destroyAssignment(req, res, next) {
    db.destroy(req.params.id)
    .then(() => {
      next();
    })
      .catch(next);
  }
}