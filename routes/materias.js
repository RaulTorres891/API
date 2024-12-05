var express = require("express");
var router = express.Router();

const materiaController = require('../controller/materiaController');
console.log(materiaController);

router.get('/', materiaController.getMaterias);

router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM materias", (err, results) => {
    if (err) {
      console.error("Error al obtener materias:", err);
        return callback(err, null);
    }
    console.log(results);
    res.json(results);
    callback(null, results);
  });
  res.send('respond with a resource');
});

module.exports = router;
