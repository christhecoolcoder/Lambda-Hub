const router = require('express')();
const CommentController = require('../controllers/commentController');


router.post('/:id',
CommentController.postComment,
(req, res) => res.json(res.locals.comment)
);

router.delete('/:id',
  CommentController.destroy,
  (req, res) => res.json(`deleted comment ${req.params.id}`)
);

router.get('/:id',
  CommentController.getAll,
  (req, res) => res.json(res.locals.comments)
);

module.exports = router;