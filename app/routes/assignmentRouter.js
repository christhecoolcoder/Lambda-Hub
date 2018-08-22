const router = require('express')();
const AssignmentController = require('../controllers/assignmentController');


router.put('/:id',
  AssignmentController.updateAssignment,
  (req, res) => res.json(res.locals.assignment)
);

router.delete('/:id',
  AssignmentController.destroyAssignment,
  (req, res) => res.json(`deleted assignment ${req.params.id}`)
);

router.get('/:id',
  AssignmentController.getOne,
 (req, res) => res.json(res.locals.assignment)
);

router.post('/',
  AssignmentController.createAssignment,
  (req, res) => res.json(res.locals.assignment)
);

router.get('/',
  AssignmentController.getAll,
  (req, res) => res.json({assignments: res.locals.assignments})
);



module.exports = router;
