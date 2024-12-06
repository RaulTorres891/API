var express = require("express");
var router = express.Router();

const salonController = require('../controller/salonController');

router.get('/', salonController.getSalones);

module.exports = router;