import Paginator from "./Paginator";
import { useState } from "react";
import ModalVenta from "./ModalVenta";
import {FcViewDetails} from 'react-icons/fc'
import {AiOutlineFileDone} from "react-icons/ai"

function TablaVentas({ data }) {

  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;
  // Agrupa las ventas por día
  const salesByDay = data.reduce((acc, venta) => {
    const fecha = new Date(venta.fecha).toLocaleDateString();
    if (!acc[fecha]) {
      acc[fecha] = [];
    }
    acc[fecha].push(venta);
    return acc;
  }, {});

  const uniqueDates = Object.keys(salesByDay);

  // Estados para el paginador
  const itemsPerPage = 1; // Una página por día
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el total de páginas
  //const totalPages = Math.ceil(data.length / itemsPerPage);

  // Función para cambiar la página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

   // Filtra los datos según la página actual (por día)
  const currentDate = uniqueDates[currentPage - 1];
  const paginatedData = salesByDay[currentDate];
 
  const [selectedRegistro, setSelectedRegistro] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (registro) => {
    setSelectedRegistro(registro);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRegistro(null);
    setModalOpen(false);
  };

  // fecha y hora 
  function formatFecha(fechaString) {
    const options ={ year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true  }
    return new Date(fechaString).toLocaleString(undefined,options);
  } 


  return (
    <div className="p-10 overflow-x-auto">
      <table className=" w-4/5  shadow-md rounded-lgtext-center bg-white text-center">
        <thead className="bg-pink-500 text-white">
          <tr>
            <th className="py-2 px-4">Fecha y Hora</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-center">
          {paginatedData.map((registro) => (
            <tr className="py-2 px-4" key={registro._id}>
             <td className="py-2 px-4">
             {formatFecha(registro.fecha)}
</td>
              <th scope="row" className="py-2 px-4" >
                {`${registro.total} MXN`}
              </th>
              <td className="pl-28" >
                <AiOutlineFileDone className="text-purple-600 " onClick={() => openModal(registro)} size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Paginator
        currentPage={currentPage}
        totalPages={uniqueDates.length}
        onPageChange={handlePageChange}
      />

      {selectedRegistro && (
        <ModalVenta isOpen={isModalOpen} onClose={closeModal} registro={selectedRegistro} />
      )}
    </div>
  );
}

export default TablaVentas;
