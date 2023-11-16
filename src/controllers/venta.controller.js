import Venta from "../models/venta.model.js"
import Producto from "../models/producto.model.js";
import moment from "moment";

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

export const getVentasByFecha = async (req, res) =>{
    try {
        const fechaBuscada = req.params.fecha; // Obtiene la fecha de la consulta
        console.log(fechaBuscada)
        // Formatea la fecha proporcionada por el usuario al formato de tus registros
        const fechaFormateada = moment(fechaBuscada, "YYYY-MM-DD").toDate();
        //Obtiene la fecha inicial del día (00:00:00) y la fecha final del día (23:59:59)
        const fechaInicio = moment(fechaFormateada).startOf("day").toDate();
        const fechaFin = moment(fechaFormateada).endOf("day").toDate();
    
        console.log(fechaInicio);
        console.log(fechaFin)
    
        // Realiza la búsqueda en la base de datos utilizando el modelo Ingreso
        const ventas = await Venta.find({
          fecha: {
            $gte: fechaInicio,
            $lte: fechaFin,
          }
        });
    
        // Devuelve los resultados al cliente
        return res.json(ventas);
      } catch (err) {
        // Manejo de errores
        return res.status(500).json({ error: "Error al buscar ingresos por fecha" });
      }
}

export const createVenta = async (req, res) => {
    const {productos, total} = req.body
    console.log(req.user)

    // crear una nueva venta 
    const newVenta = new Venta ({
        productos: productos,
        total: total,
        usuario: req.user.id
    });
    
    const savedVenta = await newVenta.save()
    res.status(204).json(savedVenta)
}
/*
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
*/

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