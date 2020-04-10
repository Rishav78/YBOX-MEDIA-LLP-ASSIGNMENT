const router = require('express').Router();

router.use('/competitions', require('./competitions'));
router.use('/competition', require('./submissions'))

module.exports = router;