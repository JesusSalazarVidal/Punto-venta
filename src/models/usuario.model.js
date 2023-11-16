/**
 * Autores: Jesus Salazar, Diana Melina Lara
 * Julio 26, 2023
 */

//importamos mongoose
import mongoose from "mongoose";

//Definición del esquema para la colección de usuarios
const usuarioSchema = mongoose.Schema(
  {
    nombreUsuario: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    sucursal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sucursal",
      required: true,
    },
    huella: {
      type: String,
    },
  },
  { timestamps: true }
);

// Crear el modelo basado en el esquema
const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
