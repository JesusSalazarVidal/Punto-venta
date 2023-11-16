import mongoose from "mongoose";

const sucursalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    numeroSucursal: {
        type: String,
        required: true
    },
});

const Sucursal = mongoose.model('Sucursal', sucursalSchema);

export default Sucursal