import { Router } from "express";
import {authRequired} from '../middlewares/validateToken.js'
import {
  crearSucursal,
  getSucursales,
  getSucursal,
  deleteSucursal,
  updateSucursal,
} from "../controllers/sucursal.controller.js";

const router = Router();

router.get("/obtenerSucursales", authRequired, getSucursales);
router.get("/obtenerSucursal/:id", authRequired, getSucursal);
router.post("/crearSucursal", authRequired, crearSucursal);
router.put("/actualizarSucursal/:id", authRequired, updateSucursal);
router.delete("/eliminarSucursal/:id", authRequired, deleteSucursal);

export default router;
