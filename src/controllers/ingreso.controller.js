import Ingreso from "../models/ingreso.model.js";
import moment from "moment";

export const getIngresos = async (req, res) => {
  try {
    const ingresos = await Ingreso.find();
    res.json(ingresos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearIngreso = async (req, res) => {
  try {
    const { cantidad, descripcion } = req.body;
    const newIngreso = new Ingreso({
      cantidad: cantidad,
      descripcion: descripcion,
    });
    await newIngreso.save();
    res.json(newIngreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteIngreso = async (req, res) => {
  console.log(req.params.id);
  try {
    const deletedIngreso = await Ingreso.findByIdAndDelete(req.params.id);
    if (!deletedIngreso)
      return res.status(404).json({ message: error.message });
    return res.status(204).json(deletedIngreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateIngreso = async (req, res) => {
  console.log(req.params.id);
  try {
    const { cantidad, descripcion } = req.body;
    const ingresoUpdate = await Ingreso.findOneAndUpdate(
      { _id: req.params.id },
      { cantidad },
      { descripcion },
      { new: true }
    );

    return res.json(ingresoUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIngreso = async (req, res) => {
  try {
    const ingreso = await Ingreso.findById(req.params.id);

    if (!ingreso) return res.status(404).json({ message: error.message });
    return res.json(ingreso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Ruta para buscar ingresos por fecha
export const getIngresosByFecha = async (req, res) => {
  console.log("hola");
  try {
    const fechaBuscada = req.params.fecha; // Obtiene la fecha de la consulta
    console.log(fechaBuscada);

    // Formatea la fecha proporcionada por el usuario al formato de tus registros
    const fechaFormateada = moment(fechaBuscada, "YYYY-MM-DD").toDate();
    //Obtiene la fecha inicial del día (00:00:00) y la fecha final del día (23:59:59)
    const fechaInicio = moment(fechaFormateada).startOf("day").toDate();
    const fechaFin = moment(fechaFormateada).endOf("day").toDate();

    console.log(fechaInicio);
    console.log(fechaFin)

    // Realiza la búsqueda en la base de datos utilizando el modelo Ingreso
    const ingresos = await Ingreso.find({
      fecha: {
        $gte: fechaInicio,
        $lte: fechaFin,
      }
    });

    // Devuelve los resultados al cliente
    return res.json(ingresos);
  } catch (err) {
    // Manejo de errores
    return res.status(500).json({ error: "Error al buscar ingresos por fecha" });
  }
};
