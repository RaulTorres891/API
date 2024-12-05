const Materia = require('../models/materia');

const getMaterias = (req, res) => {
    Materia.getAllMaterias((err, materias) => {
        if(err){
            return res.status(500).json({message: 'Error al obtener materias'});
        }
        res.status(200).json(materias);
    })
} 

module.exports = getMaterias;
