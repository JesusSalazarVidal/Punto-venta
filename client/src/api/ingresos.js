import axios from './axios'

export const getIngresosRequest = async () => axios.get('/obtenerIngresos')
export const crearIngresoRequest = async (ingreso) => axios.post('/crearIngreso', ingreso)
export const updateIngresoRequest = async (id, ingreso) => axios.put(`/actualizarIngreso/${id}`, ingreso)
export const deleteIngresoRequest = async (id) => axios.delete(`/eliminarIngreso/${id}`)
export const getIngresoRequest = async (id) => axios.get(`/obtenerIngreso/${id}`)