const db = require('../config/db');

const Materia = {
  getAllMaterias: (callback) => {
      db.query("SELECT * FROM materias", (err, results) => {
          if (err) {
              console.error("Error al obtener materias:", err);
              return callback(err, null);
          }
          callback(null, results);
      });
  }
};

module.exports = Materia;