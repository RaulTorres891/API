const db = require('../config/db');

const Salon = {
    getAllSalones: (callback) => {
        db.query("SELECT * FROM salones", (err, results) => {
            if (err) {
                console.error("Error al obtener los salones", err);
                return callback(err, null);
            }
            callback(null, results);
        });
    }
};

module.exports = Salon;