const db = require('../config/db');

const getAllMaterias = (data) => {
    console.log('Si entro');
    db.query('SELECT * FROM materias', (err, results) => {
        if (err) {
          console.error('Error al obtener materias:', err);
          return data(err);
        }
        data(results);
      });
};

module.exports = getAllMaterias;