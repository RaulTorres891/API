const db = require('../config/db');

const Grupo = {
    getAllGrupos : (callback) => {
        db.query("SELECT * FROM grupos", (err, results) => {
            if (err) {
                console.error("Error al obtener grupos:", err);
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Grupo;