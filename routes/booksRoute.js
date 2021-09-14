var express = require('express');
var router = express.Router();
const bookController = require('../Controller/bookController');

router.post('/addBook', bookController.addBook);

module.exports = router;