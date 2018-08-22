const router = require('express')();

const CommentsController = require('../controllers/Comments');

router.get('/',
CommentsController.getAll,
  (req, res) => res.json({comments: res.locals.comments})
);

router.post('/',
CommentsController.createComment,
  (req, res) => res.json(res.locals.comment)
);

router.put('/:id',
CommentsController.update,
  (req, res) => res.json(res.locals.comment))


module.exports = router;