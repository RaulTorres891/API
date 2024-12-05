var express = require("express");
var router = express.Router();

const materiaController = require('../controller/materiaController');

// const mysql = require("mysql2");
// require("dotenv").config();

// const connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
//   port: process.env.MYSQL_PORT,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("error connecting:", err.stack);
//     return;
//   }
//   console.log("Conexión a la base de datos exitosa!");
// });

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
