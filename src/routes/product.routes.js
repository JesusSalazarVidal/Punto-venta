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

router.get("/obtenerProductos", authRequired, getProductos);
router.get("/obtenerProducto/:id", authRequired, getProducto);
router.get("/obtenerProductosByNombreProducto/:id", authRequired, getProductosByNombreProducto);
router.post("/crearProducto", authRequired, createProducto);
router.put("/actualizarProducto/:id", authRequired, updateProducto);
router.delete("/eliminarProducto/:id", authRequired, deleteProducto);


export default router