/**
 * Autores: Jesus Salazar, Diana Melina Lara
 * Julio 26, 2023
 */

//Requerimos mongoose
import mongoose from 'mongoose'

//Definición del esquema para la colección de egresos
const egresoSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
      },
      cantidad: {
        type: Number,
        required: true
      },
      fecha: {
        type: Date,
        default: Date.now,
        required: true
      },
      descripcion: {
        type: String,
        required: true
      }
},{timestamps: true,});

// Crear el modelo basado en el esquema
const Egreso = mongoose.model('Egreso', egresoSchema);

export default Egreso;