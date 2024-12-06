const Maestro = require('../models/maestro');

const getMaestros = (req, res) => {
    Maestro.getAllMaestros((err, maestros) => {
        if(err) {
            return res.status(500).json({message: "Error al obtener nombres de maestros"})
        }
        res.status(200).json(maestros);
    })
}

module.exports = {getMaestros};