import axios from 'axios'

export const getProductosRequest = () => axios.get('http://localhost:3000/api/obtenerProductos');
export const getProductoRequest = (id) => axios.get(`http://localhost:3000/api/obtenerProducto/${id}`);
export const createProductoRequest = (producto) => axios.post('http://localhost:3000/api/crearProducto', producto);
export const deleteProductoRequest = (id) => axios.delete(`http://localhost:3000/api/eliminarProducto/${id}`)
export const updateProductoRequest = (id, producto) => axios.put(`http://localhost:3000/api/actualizarProducto/${id}`,producto);
