import { createContext, useContext, useState } from "react";
import { 
    createProductoRequest, 
    getProductosRequest,  
    deleteProductoRequest,
    getProductoRequest,
    updateProductoRequest,
    getProductoByTipoRequest
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
    
    const getProductosByTipo = async(tipo, setProductsOrder) => {
        try {
            const res = await getProductoByTipoRequest(tipo)
            console.log("Respuesta del servidor:", res.data);

        // Filtrar los productos por tipo
        //const productosFiltrados = res.data.filter((product) => product.tipo === tipo);
       //console.log("Productos filtrados:", productosFiltrados);
        //setProducto(productosFiltrados);
        setProductsOrder(res.data);
            //setProducto(res.data)
            //const newProductsOrder = res.data; // Supongo que la respuesta del servidor es un array de productos
            //setProductsOrder(newProductsOrder);
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
            getProductosByTipo
        }}>
            {children}
        </ProductContext.Provider>
    )
}