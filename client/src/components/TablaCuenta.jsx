import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useVentas } from "../Context/VentasContext";
import {useIngresos} from '../Context/IngresosContext'

function TablaCuenta({ data }) {
  const productos = data.productos;
  const ingreso = {cantidad: data.total}
  const { createVenta, deleteCuenta, mensaje } = useVentas();
  const {createIngreso}= useIngresos()

  if(mensaje){
    return(
      <div className="bg-green-500 p-2 text-white">{mensaje}</div>
    )
  }

  return (
    <>
      
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Producto</th>
            <th className="border border-gray-300 p-2">Precio</th>
            <th className="border border-gray-300 p-2">Cantidad</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Filas de la tabla de cuenta */}

          {/* Otras filas de la cuenta */}
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => {
                    deleteCuenta(producto._id);
                  }}
                  icon={faTrash}
                  style={{ color: "#dd3636" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end font-semibold text-2xl pt-10">
        <h1 className="text-right ">Total:</h1>
        <h2 className="text-red-600 px-4">{`$ ${data.total}`} </h2>
      </div>
      <div className="flex justify-center items-center ">
        <button
          onClick={() =>{
            createVenta(data)
            console.log(data.total)
            createIngreso(ingreso)

          }}
          className="bg-green-400 w-[185px] h-[48px] uppercase text-black font-semibold hover:bg-blue-300 mt-5 rounded-xl"
        >
          Pagar
        </button>
      </div>
    </>
  );
}

export default TablaCuenta;
