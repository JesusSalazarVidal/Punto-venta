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
  try {
    const { cantidad } = req.body;
    const newEgreso = new Egreso({
      usuario: req.user.id,
      cantidad: cantidad,
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
    const { cantidad } = req.body;
    const egresoUpdate = await Egreso.findOneAndUpdate(
      { _id: req.params.id },
      { cantidad },
      { new: true }
    );

    return res.json(egresoUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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
