import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProducto,
  getProductos,
  getProductosByNombreProducto,
  createProducto,
  deleteProducto,
  updateProducto,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/obtenerProductos", getProductos);
router.get("/obtenerProducto/:id", getProducto);
router.get("/obtenerProductosByNombreProducto/:id", getProductosByNombreProducto);
router.post("/crearProducto", createProducto);
router.put("/actualizarProducto/:id", updateProducto);
router.delete("/eliminarProducto/:id", deleteProducto);


export default router