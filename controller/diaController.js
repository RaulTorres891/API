const Dia = require('../models/dia');

const getDias = (req, res) => {
    Dia.getAllDias((err, dias) => {
        if(err){
            res.status(500).json({message: 'Error al obtener los dias', error: err});
        }
        res.status(200).json(dias);
    })
}

module.exports = { getDias };