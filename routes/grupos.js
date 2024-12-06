var express = require("express");
var router = express.Router();

const grupoController = require('../controller/grupoController');

router.get('/', grupoController.getGrupos);

module.exports = router;