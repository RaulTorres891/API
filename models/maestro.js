const db = require("../config/db");

const Maestro = {
    getAllMaestros: (callback) => {
        db.query("SELECT * FROM maestros", (err, results) => {
            if (err) {
                console.error("Error al obtener materias:", err);
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Maestro;