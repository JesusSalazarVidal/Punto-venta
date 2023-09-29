import { Link } from "react-router-dom";
import { useUsuarios } from "../Context/UsuariosContext";
import { useState } from "react";
import Paginator from "./Paginator";

function TablaUsuarios({ data }) {
  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;
  const {deleteUsuario} = useUsuarios()

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
            <th scope="py-2 px-4" className="px-6 py-3">
              Nombre
            </th>
            <th scope="py-2 px-4" className="px-6 py-3">
              Nombre Usuario
            </th>
            <th scope="py-2 px-4" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {paginatedData.map((usuario) => (
            <tr
            className="py-2 px-4"
              key={usuario._id}
            >
              <th className="py-2 px-4 ">
                {usuario.nombre}
              </th>
              <td className="py-2 px-4 "> {usuario.nombreUsuario} </td>
              <td className="py-2 px-4  text-center">
                <Link
                  to={`/actualizarUsuario/${usuario._id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={()=>{deleteUsuario(usuario._id)}}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
                >
                  Eliminar
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

export default TablaUsuarios;