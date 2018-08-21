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
<<<<<<< HEAD
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
=======
  destroy(req, res) {
    db.destroy(req.params.id)
      .then(() => {
        res.json({message: 'assignment deleted'});
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
>>>>>>> 905105b2d53630e5123b7ff780dae933b35c3f8b
      });
  }
}