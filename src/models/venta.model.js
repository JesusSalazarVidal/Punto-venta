/*
* autores: Diana Melina y Jesus Salazar
* sep 05, 2023
*/

//Requerimos mongoose
import mongoose from 'mongoose'
import { array, number } from 'zod';

//Definición del esquema para la colección de ventas
const ventaSchema = mongoose.Schema({
    productos:{ 
        //type: mongoose.Schema.Types.ObjectId, 
        //ref: 'Producto',
        type: Object, 
        required: true 
    },
    total: {
        type:Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now,
        required: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
    }
},{timestamps: true,});

// Crear el modelo basado en el esquema
const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;