const router = require('express')();
const AssignmentController = require('../controllers/controller');




router.get('/',
  AssignmentController.getAll,
  (req, res) => console.log(res.locals.assignment)
);



module.exports = router;
