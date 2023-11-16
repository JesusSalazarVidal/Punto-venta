import moment from "moment";
import Egreso from "../models/egreso.model.js";

export const getEgresos = async (req, res) => {
  try {
    const egresos = await Egreso.find({ usuario: req.user.id }).populate(
      "usuario"
    );
    res.json(egresos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearEgreso = async (req, res) => {
  //console.log(req.user.id)
  try {
    const { cantidad, descripcion } = req.body;
    const newEgreso = new Egreso({
      usuario: req.user.id,
      cantidad: cantidad,
      descripcion: descripcion,
    });
    await newEgreso.save();
    res.json(newEgreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEgreso = async (req, res) => {
  try {
    const deletedEgreso = await Egreso.findByIdAndDelete(req.params.id);
    if (!deletedEgreso) return res.status(404).json({ message: error.message });
    return res.status(204).json(deletedEgreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEgreso = async (req, res) => {
  console.log(req.params.id);
  try {
    const { cantidad, descripcion } = req.body;
    const egresoUpdate = await Egreso.findOneAndUpdate(
      { _id: req.params.id },
      { cantidad, descripcion },
      { new: true }
    );
  
  } catch (error) {
    // Maneja cualquier error potencial aquí y envía una respuesta apropiada.
    console.error(error);
    // Envía una respuesta de error, si es necesario.
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


export const getEgreso = async (req, res) => {
  try {
    const egreso = await Egreso.findById(req.params.id);

    if (!egreso) return res.status(404).json({ message: error.message });
    return res.json(egreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Ruta para buscar Egresos por fecha
export const getEgresosByFecha = async (req, res) => {
  try {
    const fechaBuscada = req.params.fecha; // Obtiene la fecha de la consulta

    // Formatea la fecha proporcionada por el usuario al formato de tus registros
    const fechaFormateada = moment(fechaBuscada, "YYYY-MM-DD").toDate();
    //Obtiene la fecha inicial del día (00:00:00) y la fecha final del día (23:59:59)
    const fechaInicio = moment(fechaFormateada).startOf("day").toDate();
    const fechaFin = moment(fechaFormateada).endOf("day").toDate();

    //console.log(fechaInicio);
    //console.log(fechaFin)

    // Realiza la búsqueda en la base de datos utilizando el modelo Ingreso
    const egresos = await Egreso.find({
      fecha: {
        $gte: fechaInicio,
        $lte: fechaFin,
      }
    });

    // Devuelve los resultados al cliente
    return res.json(egresos);
  } catch (err) {
    // Manejo de errores
    return res.status(500).json({ error: "Error al buscar ingresos por fecha" });
  }
};