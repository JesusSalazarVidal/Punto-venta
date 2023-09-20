import Producto from "../models/producto.model.js";

export const getProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};
export const getProducto = async (req, res) => {
  try {
    const { id } = req.params; //guardamos el id
    const producto = await Producto.findById(id);

    if (!producto)
      return res.status(404).json({ message: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
};
export const getProductosByNombreProducto = async (req, res) => {};
export const getProductosByTipo = async (req, res) => {
    const tipo = req.params.tipo;
    console.log(tipo);
    
    try {
      const productos = await Producto.find({ tipo: tipo });
      res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener productos por tipo' });
    }
  };
export const createProducto = async (req, res) => {
  const { nombre, tipo, precio } = req.body;

  const newProducto = new Producto({
    nombre: nombre,
    tipo: tipo,
    precio: precio,
  });
  const savedProduct = await newProducto.save();
  res.json(savedProduct);
};

export const updateProducto = async (req, res) => {
  const { id } = req.params; //guardamos el id
  const producto = await Producto.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!producto)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(producto);
};

export const deleteProducto = async (req, res) => {
  const { id } = req.params; //guardamos el id
  const producto = await Producto.findByIdAndDelete(id);

  if (!producto)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.sendStatus(204);
};
