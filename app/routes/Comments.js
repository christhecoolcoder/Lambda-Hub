const router = require('express')();

const commentsController = require('../controllers/Comments');

router.get('/',
commentsController.getAll,
  (req, res) => res.json({authors: res.locals.comments})
);

router.post('/',
commentsController.createAuthor,
  (req, res) => res.json(res.locals.comments)
);

router.put('/:id',
commentsController.updateAuthor,
  (req, res) => res.json(res.locals.comments))


module.exports = router;