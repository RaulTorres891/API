var express = require("express");
var router = express.Router();

const maestroController = require('../controller/maestroController');

router.get('/', maestroController.getMaestros);

module.exports = router;