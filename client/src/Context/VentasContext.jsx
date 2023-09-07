import { createContext, useContext, useState} from "react";
import { 
    createVentaRequest, 
    deleteVentaRequest, 
    getVentasRequest, 
    getVentaRequest, 
    updateVentaRequest } from "../api/ventas";

const VentaContext = createContext();

export const useVentas = () => {
    const context = useContext(VentaContext);

    if (!context) {
        throw new Error("useVentas must be user within a ProductProvider")
    }
    return context;
}

export function VentaProvider ({ children }) {
    const [venta, setVenta] = useState([]);

    const getVentas = async () => {
        try {
            const res = await getVentasRequest()
            setVenta(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createVenta = async (venta) => {
        const res = await createVentaRequest(venta)
        console.log(res)
    }

    const deleteVenta = async (id) => {
        try {
            const res = await  deleteVentaRequest(id)
            if (res.status === 204) {
            setVenta(venta.filter((vent) => vent._id !== id))}
                
        } catch (error) {
            console.log(error);
        }
    }

    const getVenta = async (id) => {
        try {
            const res = await getVentaRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateVenta = async (id, vent) => {
        try {
            await updateVentaRequest(id, vent)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <VentaContext.Provider 
        value={{
                venta,
                createVenta,
                getVentas,
                deleteVenta,
                getVenta,
                updateVenta,
        }}>
            {children}
        </VentaContext.Provider>
    )
}