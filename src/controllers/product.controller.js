import Producto from '../models/producto.model.js'
import Categoria from '../models/categoria.model.js'
import Tipo from '../models/tipo.model.js'
import multer from 'multer';

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

  export const getProductosByCategoria = async (req, res) => {
    const categoria = req.params.categoria;
    console.log(categoria);
    
    try {
      const productos = await Producto.find({ categoria: categoria });
      res.json(productos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener productos por tipo' });
    }
  };
export const createProducto = async (req, res) => {
  const { nombre, tipo, categoria, precio } = req.body;

  const newProducto = new Producto({
    nombre: nombre,
    tipo: tipo,
    categoria: categoria,
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

//-------------Categoria-------------------

export const getCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};


export const createCategoria = async (req, res) => {
  const { nombre, tipo } = req.body;
  

  const newCategoria = new Categoria({
    nombre: nombre,
    tipo: tipo
  });
  const savedCategoria = await newCategoria.save();
  res.json(savedCategoria);
};

export const getCategoriasByTipo = async (req, res) => {
  const tipo = req.params.tipo;
  console.log(tipo);
  
  try {
    const categorias = await Categoria.find({ tipo: tipo });
    res.json(categorias);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener categorias por tipo' });
  }
};


//--------------Tipo----------------

export const getTipos = async (req, res) => {
  const tipos = await Tipo.find();
  res.json(tipos);
};


export const createTipo = async (req, res) => {
  const { nombre } = req.body;
  console.log(nombre)

  const newTipo = new Tipo({
    nombre: nombre
  });
  const savedTipo = await newTipo.save();
  res.json(savedTipo);
};
