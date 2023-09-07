import axios from "./axios";

export const getVentasRequest = () => axios.get('/obtenerVentas');
export const getVentaRequest = (id) => axios.get(`/obtenerVenta/${id}`);
export const createVentaRequest = (venta) => axios.post('/crearVenta', venta);
export const deleteVentaRequest = (id) => axios.delete(`/eliminarVenta/${id}`)
export const updateVentaRequest = (id, venta) => axios.put(`/actualizarVenta/${id}`,venta);