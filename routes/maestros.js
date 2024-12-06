var express = require("express");
var results = express.Router();

const maestroController = require('../controller/maestroController');

router.get('/', maestroController.getMaestros);

module.exports = router;