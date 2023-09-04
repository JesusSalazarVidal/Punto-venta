import { createContext, useContext, useState } from "react";
import { 
    createProductoRequest, 
    getProductosRequest,  
    deleteProductoRequest,
    getProductoRequest,
    updateProductoRequest
} from "../api/productos";

const ProductContext = createContext();

export const useProduct = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProduct must be user within a ProductProvider")
    }
    return context;
}

export function ProductProvider({ children }) {
    const [producto, setProducto] = useState([]);

    const getProductos = async () => {
        try {
            const res = await getProductosRequest()
            setProducto(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createProducto = async (producto) => {
        const res = await createProductoRequest(producto)
        console.log(res)
    }

    const deleteProducto = async (id) => {
        try {
            const res = await  deleteProductoRequest(id)
            if (res.status === 204) {
            setProducto(producto.filter((product) => product._id !== id))}
                
        } catch (error) {
            console.log(error);
        }
    }

    const getProducto = async (id) => {
        try {
            const res = await getProductoRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateProducto = async (id, product) => {
        try {
            await updateProductoRequest(id, product)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ProductContext.Provider 
        value={{
            producto,
            createProducto,
            getProductos,
            deleteProducto,
            getProducto,
            updateProducto,
        }}>
            {children}
        </ProductContext.Provider>
    )
}