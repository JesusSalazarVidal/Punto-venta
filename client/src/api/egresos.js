import axios from './axios'

export const getEgresosRequest = async () => axios.get('/obtenerEgresos')
export const crearEgresoRequest = async (egreso) => axios.post('/crearEgreso', egreso)
export const updateEgresoRequest = async (egreso) => axios.put(`/actualizarEgreso/${egreso.id}`, egreso)
export const deleteEgresoRequest = async (id) => axios.delete(`/eliminarEgreso/${id}`)
export const obtenerEgresoRequest = async (id) => axios.get(`/obtenerEgreso/${id}`)