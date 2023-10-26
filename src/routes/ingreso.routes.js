import { Router } from "express";
import {
  crearIngreso,
  getIngresos,
  getIngreso,
  deleteIngreso,
  updateIngreso,
  getIngresosByFecha,
  getIngresosEntreFechas,
} from "../controllers/ingreso.controller.js";

import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
//import {crearIngresoSchema} from '../schemas/ingreso.schema.js'

const router = Router()

router.get('/obtenerIngresos', authRequired, getIngresos);
router.post('/crearIngreso',authRequired, crearIngreso)
router.get('/obtenerIngreso/:id', authRequired, getIngreso)
router.put('/actualizarIngreso/:id', authRequired, updateIngreso)
router.delete('/eliminarIngreso/:id', authRequired, deleteIngreso)
router.get('/obtenerIngresosByFecha/:fecha', authRequired, getIngresosByFecha)
router.get('/obtenerIngresosEntreFechas/:fechaInicio/:fechaFin', authRequired, getIngresosEntreFechas)

export default router;