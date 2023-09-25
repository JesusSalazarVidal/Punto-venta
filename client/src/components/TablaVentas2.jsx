import { Link } from "react-router-dom";
import { useEgresos } from "../Context/EgresosContext";
import { useIngresos } from "../Context/IngresosContext";
import Paginator from "./Paginator";
import { useState } from "react";

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
              <button
                className="text-blue-500 hover:underline"
                
              >
                Ver Detalles
              </button>
                
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
    </div>
  );
}

export default TablaVentas;
