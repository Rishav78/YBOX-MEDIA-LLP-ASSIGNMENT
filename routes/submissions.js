const router = require('express').Router();
const { submission } = require('../controllers');

router.get('/:id/submission', submission.getAll);


module.exports = router;