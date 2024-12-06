var express = require("express");
var router = express.Router();

const sesionController = require("../controller/sesionController");

router.get("/", sesionController.getSesiones);

module.exports = router;