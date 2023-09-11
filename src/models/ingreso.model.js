/**
 * Autores: Jesus Salazar, Diana Melina Lara
 * Julio 26, 2023
 */

//Requerimos mongoose
import mongoose from "mongoose";

//Definición del esquema para la colección de egresos
const ingresoSchema = mongoose.Schema(
  {
    cantidad: {
      type: Number,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

// Crear el modelo basado en el esquema
const Ingreso = mongoose.model("Ingreso", ingresoSchema);

export default Ingreso;
