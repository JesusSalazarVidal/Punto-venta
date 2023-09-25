import Paginator from "./Paginator";
import { useState } from "react";
import ModalVenta from "./ModalVenta";
import {FcViewDetails} from 'react-icons/fc'

function TablaVentas({ data }) {
  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;

  // Estados para el paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Cambia este valor según tus necesidades numero de elementos por pagina

  // Calcula el total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Función para cambiar la página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filtra los datos según la página actual
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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

  return (
    <div className="p-10 sm:ml-64 overflow-x-auto">
      <table className=" w-full  shadow-md rounded-lgtext-center bg-white text-center">
        <thead className="bg-pink-500 text-white">
          <tr>
            <th className="py-2 px-4">Fecha</th>
            <th className="py-2 px-4">Total</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {paginatedData.map((registro) => (
            <tr className="py-2 px-4" key={registro._id}>
              <td className="py-2 px-4">
                {new Date(registro.fecha).toLocaleDateString()}
              </td>
              <th scope="row" className="py-2 px-4">
                {`${registro.total} MXN`}
              </th>
              <td>
                <FcViewDetails onClick={() => openModal(registro)} size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedRegistro && (
        <ModalVenta isOpen={isModalOpen} onClose={closeModal} registro={selectedRegistro} />
      )}
    </div>
  );
}

export default TablaVentas;
