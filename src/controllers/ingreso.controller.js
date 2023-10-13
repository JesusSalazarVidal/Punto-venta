import Ingreso from "../models/ingreso.model.js";

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

export const deleteIngreso= async (req, res) => {
    console.log(req.params.id)
  try {
    const deletedIngreso = await Ingreso.findByIdAndDelete(req.params.id);
    if (!deletedIngreso) return res.status(404).json({ message: error.message });
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
      { cantidad, descripcion },
      { new: true }
    );

    return res.json(ingresoUpdate);
  } catch (error) {
    // Maneja cualquier error potencial aquí y envía una respuesta apropiada.
    console.error(error);
    // Envía una respuesta de error, si es necesario.
    res.status(500).json({ error: 'Error interno del servidor' });
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
