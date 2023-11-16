import moment from "moment";
import Sucursal from "../models/sucursal.model.js";

export const getSucursales = async (req, res) => {
  try {
    const sucursales = await Sucursal.find();
    res.json(sucursales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearSucursal = async (req, res) => {
  try {
    const { nombre, numeroSucursal } = req.body;
    const newSucursal = new Sucursal({
      nombre: nombre,
      numeroSucursal: numeroSucursal,
    });
    await newSucursal.save();
    res.json(newSucursal);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSucursal = async (req, res) => {
  try {
    const deletedSucursal = await Sucursal.findByIdAndDelete(req.params.id);
    if (!deletedSucursal) return res.status(404).json({ message: error.message });
    return res.status(204).json(deletedSucursal);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSucursal = async (req, res) => {
  console.log(req.params.id);
  try {
    const { nombre, numeroSucursal } = req.body;
    const sucursalUpdate = await Sucursal.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, numeroSucursal },
      { new: true }
    );
  
  } catch (error) {
    // Maneja cualquier error potencial aquí y envía una respuesta apropiada.
    console.error(error);
    // Envía una respuesta de error, si es necesario.
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


export const getSucursal = async (req, res) => {
  try {
    const sucursal = await Sucursal.findById(req.params.id);

    if (!sucursal) return res.status(404).json({ message: error.message });
    return res.json(sucursal);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
