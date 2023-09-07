import Venta from "../models/venta.model.js"
import Producto from "../models/producto.model.js";

export const getVentas = async (req, res) => {
    const ventas = await Venta.find()
    res.json(ventas)
}

export const getVenta = async (req, res) =>{
    try {
        const {id} = req.params;//guardamos el id 
        const venta = await Venta.findById(id)
    
        if(!venta) return res.status(404).json({message: 'Venta no encontrado'})
        res.json(venta)
    } catch (error) {
        return res.status(404).json({ message: "Venta no encontrado"})
        
    }
};

export const createVenta = async (req, res) => {
    const {productos, cantidad} = req.body;
    console.log(productos)
    
    // obtener los detalles de los productos por el id
    const productosDetalles = await Producto.find({_id: { $in: productos}}, 'precio');
    

    // calcular el precio total sumando los precios de los productos
    const total = productosDetalles.reduce(
          (accumulador, product) =>
            accumulador + product.precio * cantidad,
          0
        );
      

    // crear una nueva venta 
    const newVenta = new Venta ({
        productos: productos,
        cantidad: cantidad,
        total: total
    });
    const savedVenta = await newVenta.save()
    res.json(savedVenta)
};

export const updateVenta = async (req, res) =>{
    const {id} = req.params;//guardamos el id 
    const venta = await Venta.findByIdAndUpdate(id, req.body, {
        new: true
    })

    if(!venta) return res.status(404).json({message: 'Venta no encontrado'})
    res.json(venta)
};

export const deleteVenta = async (req, res) =>{
        const {id} = req.params;//guardamos el id 
        const venta = await Venta.findByIdAndDelete(id)

        if(!venta) return res.status(404).json({message: 'Venta no encontrado'})
        res.sendStatus(204)

};