const Grupo = require('../models/grupo');

const getGrupos = (req, res) =>{
    Grupo.getAllGrupos((err, grupos) => {
        if(err) {
            return res.status(500).json({message: "Error al obtener los grupos"});
        }
        res.status(200).json(grupos);
    })
}

module.exports = { getGrupos }