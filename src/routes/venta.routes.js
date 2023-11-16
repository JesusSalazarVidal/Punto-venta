import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    createVenta,
    getVentas,
    getVenta,
    updateVenta,
    deleteVenta,
    getVentasByFecha,
} from "../controllers/venta.controller.js";

const router = Router();

router.get("/obtenerVentas", authRequired, getVentas);
router.get("/obtenerVenta/:id", authRequired, getVenta);
router.get("/obtenerVentasByFecha/:fecha", authRequired, getVentasByFecha);
router.post("/crearVenta", authRequired, createVenta);
router.put("/actualizarVenta/:id", authRequired, updateVenta);
router.delete("/eliminarVenta/:id", authRequired, deleteVenta);

export default router