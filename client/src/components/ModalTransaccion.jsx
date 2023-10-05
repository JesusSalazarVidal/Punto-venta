import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useVentas } from "../Context/VentasContext";
import { useIngresos } from "../Context/IngresosContext";

function ModalTransaccion({ isOpen, onClose, venta }) {
  if (!isOpen) return null;
  const [cantidadRecibida, setCantidadRecibida] = useState("");

  const [cambio, setCambio] = useState(0);

  const ingreso = { cantidad: venta.total };
  const { createVenta } = useVentas();
  const { createIngreso } = useIngresos();

  const handleGuardar = (venta) => {
    setCantidadRecibida("");
    setCambio(0);
    console.log(venta);
    onClose;
  };

  const handleCantidadCambio = (event) => {
    const value = parseFloat(event.target.value);
    setCantidadRecibida(value);
    calcularCambio(value);
  };

  const calcularCambio = (cantidad) => {
    const totalVenta = venta.total;
    const cambioTotal = cantidad - totalVenta;
    setCambio(cambioTotal);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center z-50">
        <div className="modal-container bg-pink-200 w-2/6 h-auto mx-5 p-4 rounded shadow-lg absolute z-50 right-0 top-20">
          {/* Icono en la esquina superior derecha */}
          <div className="absolute top-0 right-0 p-2">
            <AiOutlineClose
              size={32}
              onClick={onClose}
              style={{ color: "red" }}
            />
          </div>
          <h1 className="text-center font-bold text-3xl ">Venta</h1>

          <h3 className="text-lg font-bold">Productos:</h3>

          <ul className="list-disc pl-6 mt-2">
            {venta.productos.map((producto) => (
              <li key={producto.id} className="text-gray-800">
                {producto.cantidad} {producto.nombre} ${producto.precio} <br />
              </li>
            ))}
          </ul>
          <div className=" text-xl font-bold text-purple-600">
            Total: ${venta.total}
          </div>

          <form name="cambio" className="mt-3">
            <label>
              Cantidad Recibida:
              <input
                type="number"
                value={cantidadRecibida}
                onChange={handleCantidadCambio}
                className="bg-emerald-200"
                autoFocus
              />
            </label>
          </form>
          <p>Cambio: ${cambio.toFixed(2)}</p>

          <div className="flex justify-center items-center ">
            <button
              onClick={() => {
                setCantidadRecibida("");
                setCambio(0);
                createVenta(venta);
                console.log(venta.total);
                createIngreso(ingreso);
                onClose();
              }}
              className="bg-green-400 w-[185px] h-[48px] uppercase text-black font-semibold hover:bg-blue-300 mt-5 rounded-xl"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalTransaccion;
