import axios from './axios'

export const getProductosRequest = () => axios.get('/obtenerProductos');
export const getProductoRequest = (id) => axios.get(`/obtenerProducto/${id}`);
export const createProductoRequest = (producto) => axios.post('/crearProducto', producto);
export const deleteProductoRequest = (id) => axios.delete(`/eliminarProducto/${id}`)
export const updateProductoRequest = (id, producto) => axios.put(`/actualizarProducto/${id}`,producto);
