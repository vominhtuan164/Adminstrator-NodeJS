var express = require('express');
var router = express.Router();

router.use('/', require('./home'));
router.use('/dashboard', require('./dashboard'));
router.use('/items', require('./items'));

module.exports = router;
