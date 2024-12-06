const Sesion = require("../models/sesion");

const getSesiones = (req, res) => {
    Sesion.getAllSesiones((err, sesiones) =>{
        if (err) {
            res.status(500).json({ message: "Error al obtener las sesiones" });
        }
        res.status(200).json(sesiones);
    })
}

module.exports = { getSesiones };