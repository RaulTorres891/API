const db = require('../config/db');

const Dia = {
  getAllDias: (callback) => {
      db.query("SELECT * FROM dias", (err, results) => {
          if (err) {
              console.error("Error al obtener los dias de la semana:", err);
              return callback(err, null);
          }
          callback(null, results);
      });
  }
};

module.exports = Dia;