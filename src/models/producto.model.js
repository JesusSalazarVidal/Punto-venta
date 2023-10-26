/**
 * Autores: Jesus Salazar, Diana Melina Lara
 * Julio 26, 2023
 */

//Requerimos mongoose
import mongoose from 'mongoose'

//Definición del esquema para la colección de productos
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

// Crear el modelo basado en el esquema
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;