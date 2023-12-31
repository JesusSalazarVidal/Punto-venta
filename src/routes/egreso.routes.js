import { Router } from "express";
import {
  crearEgreso,
  getEgresos,
  getEgreso,
  deleteEgreso,
  updateEgreso,
  getEgresosByFecha
} from "../controllers/egreso.controller.js";

import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {crearEgresoSchema} from '../schemas/egreso.schema.js'

const router = Router()

router.get('/obtenerEgresos', authRequired, getEgresos);
router.post('/crearEgreso',authRequired, crearEgreso)
router.get('/obtenerEgreso/:id', authRequired, getEgreso)
router.put('/actualizarEgreso/:id', authRequired, updateEgreso)
router.delete('/eliminarEgreso/:id', authRequired, deleteEgreso)
router.get('/obtenerEgresosByFecha/:fecha', authRequired, getEgresosByFecha)

export default router;