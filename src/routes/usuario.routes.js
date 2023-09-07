import { Router } from "express";
import { getUsuarios, deleteUsuario, updateUsuario, getUsuario} from "../controllers/usuarios.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/obtenerUsuarios", authRequired, getUsuarios);
router.get('/obtenerUsuario/:id',authRequired, getUsuario)
router.put('/actualizarUsuario/:Id', authRequired, updateUsuario)
router.delete('/eliminarUsuario/:id', authRequired, deleteUsuario)

export default router;
