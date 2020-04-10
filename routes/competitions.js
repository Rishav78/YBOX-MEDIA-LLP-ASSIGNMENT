//@ts-check
const router = require('express').Router();
const { competition } = require('../controllers');

router.get('/', competition.getAll);

module.exports = router;