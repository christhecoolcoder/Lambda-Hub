const WorkModel = require('../models/Work');

module.exports = {
  getAll(req, res, next) {
    WorkModel.index()
      .then(work => {
        res.locals.work = work;
        next();
      })
      .catch(next);
  }
}