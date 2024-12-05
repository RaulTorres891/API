var express = require("express");
var router = express.Router();

const materiaController = require('../controller/materiaController');

router.get('/', materiaController.getMaterias);

module.exports = router;
