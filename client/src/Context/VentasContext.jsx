import { createContext, useContext, useState, useEffect } from "react";
import {
  createVentaRequest,
  deleteVentaRequest,
  getVentasRequest,
  getVentaRequest,
  updateVentaRequest,
} from "../api/ventas";

const VentaContext = createContext();

export const useVentas = () => {
  const context = useContext(VentaContext);

  if (!context) {
    throw new Error("useVentas must be user within a ProductProvider");
  }
  return context;
};

export function VentaProvider({ children }) {
  const [venta, setVenta] = useState([]);
  const [cuenta, setCuenta] = useState({
    productos: [],
    total: 0,
  });
  const [mensaje, setMensaje] = useState(null); // Estado para el mensaje

  const getVentas = async () => {
    try {
      const res = await getVentasRequest();
      setVenta(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createVenta = async (venta) => {
    try {
      const res = await createVentaRequest(venta);
      if (res.status === 204) {
        setCuenta({productos:[], total: 0});
        setMensaje("La compra se guardo con exito")
      }
      console.log(res);
    } catch (error) {
        console.log(error)
    }
  };

  const deleteVenta = async (id) => {
    try {
      const res = await deleteVentaRequest(id);
      if (res.status === 204) {
        setVenta(venta.filter((vent) => vent._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVenta = async (id) => {
    try {
      const res = await getVentaRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateVenta = async (id, vent) => {
    try {
      await updateVentaRequest(id, vent);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCuenta = (id) => {
    // Supongamos que deseas eliminar un producto con un ID específico (por ejemplo, "productoId")

    const productoId = id; // Reemplaza con el ID real del producto a eliminar
    const prevProductos = cuenta.productos;

    // Busca el índice del producto por su ID
    const productoIndex = prevProductos.findIndex(
      (producto) => producto._id === productoId
    );

    if (productoIndex !== -1) {
      // Si se encuentra el producto, disminuye la cantidad en 1
      prevProductos[productoIndex].cantidad--;

      // Verifica si la cantidad después de la disminución es mayor que 0
      if (prevProductos[productoIndex].cantidad <= 0) {
        // Si la cantidad es 0 o menos, elimina el producto
        prevProductos.splice(productoIndex, 1);
      }

      // Recalcula el total de la cuenta
      const nuevoTotal = prevProductos.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
      );

      // Actualiza la cuenta con los productos actualizados y el nuevo total
      setCuenta((prevCuenta) => ({
        ...prevCuenta,
        productos: prevProductos,
        total: nuevoTotal,
      }));
    }
  };

  useEffect(() => {
    if (mensaje) {
      // Si hay un mensaje, configura un temporizador para ocultarlo después de 5 segundos
      const timerId = setTimeout(() => {
        setMensaje(null); // Oculta el mensaje
      }, 3000); // 5000 milisegundos = 5 segundos

      // Limpia el temporizador si el componente se desmonta o el mensaje cambia
      return () => clearTimeout(timerId);
    }
  }, [mensaje]);

  return (
    <VentaContext.Provider
      value={{
        venta,
        createVenta,
        getVentas,
        deleteVenta,
        getVenta,
        updateVenta,
        cuenta,
        setCuenta,
        deleteCuenta,
        mensaje,
      }}
    >
      {children}
    </VentaContext.Provider>
  );
}
