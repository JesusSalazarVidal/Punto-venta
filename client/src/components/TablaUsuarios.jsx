import { Link } from "react-router-dom";
import { useUsuarios } from "../Context/UsuariosContext";
import { useState } from "react";
import Paginator from "./Paginator";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function TablaUsuarios({ data }) {
  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;
  const { deleteUsuario } = useUsuarios();

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
    <div className="p-10 overflow-x-auto">
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
            <tr className="py-2 px-4" key={usuario._id}>
              <th className="py-2 px-4 ">{usuario.nombre}</th>
              <td className="py-2 px-4 "> {usuario.nombreUsuario} </td>
              <td className="py-2 px-2 md:px-4 lg:px-6">
                <div className="flex mx-1 md:mx-3">
                  {" "}
                  {/* Ajusta el margen en diferentes tamaños de pantalla */}
                  <Link
                    className="p-2"
                    to={`/actualizarUsuario/${usuario._id}`}
                  >
                    <BiEdit size={20} className="text-purple-600" />
                  </Link>
                  <Link className="p-2">
                    <RiDeleteBinLine
                      onClick={() => {
                        deleteUsuario(usuario._id);
                      }}
                      size={20}
                      style={{ color: "red" }}
                    />
                  </Link>
                </div>
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
