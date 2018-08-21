const router = require('express')();
const WorkController = require('../controllers/controller');




router.get('/',
  WorkController.getAll,
  (req, res) => console.log(res.locals.work)
);



module.exports = router;
