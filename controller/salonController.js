const Salon = require('../models/salon');

const getSalones = (req, res) => {
    Salon.getAllSalones((err, salones) => {
        if (err) {
            return res.status(500).json({message: 'Error al obtener los salons'});
        }
        res.status(200).json(salones);
    })
}

module.exports = { getSalones };