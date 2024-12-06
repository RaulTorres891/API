var express = require("express");
var router = express.Router();

const diaController = require('../controller/diaController');

router.get('/', diaController.getDias);

module.exports = router;
