import mongoose from 'mongoose'

const tipoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});

const Tipo = mongoose.model('Tipo', tipoSchema);

export default Tipo