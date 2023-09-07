import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    createVenta,
    getVentas,
    getVenta,
    updateVenta,
    deleteVenta,
} from "../controllers/venta.controller.js";

const router = Router();

router.get("/obtenerVentas", getVentas);
router.get("/obtenerVenta/:id", getVenta);
router.post("/crearVenta", createVenta);
router.put("/actualizarVenta/:id", updateVenta);
router.delete("/eliminarVenta/:id", deleteVenta);

export default router