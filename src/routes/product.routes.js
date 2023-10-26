import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProducto,
  getProductos,
  getProductosByNombreProducto,
  createProducto,
  deleteProducto,
  updateProducto,
  getProductosByTipo,
  getProductosByCategoria,
  getCategorias,
  createCategoria,
  getCategoriasByTipo,
  getTipos,
  createTipo
} from "../controllers/product.controller.js";

const router = Router();

router.get("/obtenerProductos", authRequired, getProductos);
router.get("/obtenerProducto/:id", authRequired, getProducto);
router.get("/obtenerProductosByNombreProducto/:id",authRequired, getProductosByNombreProducto);
router.get("/obtenerProductosByTipo/:tipo",authRequired, getProductosByTipo);
router.get("/obtenerProductosByCategoria/:categoria",authRequired, getProductosByCategoria);
router.post("/crearProducto", authRequired, createProducto);
router.put("/actualizarProducto/:id", authRequired, updateProducto);
router.delete("/eliminarProducto/:id", authRequired, deleteProducto);
//Categoria
router.get("/obtenerCategorias", authRequired, getCategorias);
router.post("/crearCategoria", authRequired, createCategoria);
router.get("/obtenerCategoriasByTipo/:tipo", authRequired, getCategoriasByTipo);
//Tipo
router.get("/obtenerTipos", authRequired, getTipos);
router.post("/crearTipo", authRequired, createTipo);


export default router