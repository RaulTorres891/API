const db = require("../config/db");

const Sesion = {
    getAllSesiones: (callback) => {
        db.query("SELECT * FROM sesiones", (err, results) =>{
            if(err) {
                console.error("Error al obtener las sesiones:", err);
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Sesion;