import Usuario from '../models/usuario.model.js'

export const getUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios)
    } catch (error) {
        return res.status(500).json({message: message});
    }
};

export const getUsuario = async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
  
      if (!usuario) return res.status(404).json({ message: error.message });
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
export const updateUsuario = async (req, res) => {
    const {Id} = req.params
    try {
      const usuarioUpdate = await Usuario.findOneAndUpdate({_id: Id}, req.body,
        { new: true }
      );
  
      return res.json(usuarioUpdate);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const deleteUsuario = async (req, res) => {
    try {
        const deletedUsuario = await Usuario.findByIdAndDelete(req.params.id);
        if(!deletedUsuario) return res.status(404).json({message: error.message})
        return res.status(204).json(deletedUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
} 