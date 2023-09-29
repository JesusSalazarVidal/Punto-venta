import { Link } from "react-router-dom";
import { useEgresos } from "../Context/EgresosContext";
import { useIngresos } from "../Context/IngresosContext";
import Paginator from "./Paginator";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

function Tabla({ data, tipo }) {
  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;

  const { deleteEgreso } = useEgresos();

  const { deleteIngreso } = useIngresos();

  // Estados para el paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Cambia este valor según tus necesidades numero de elementos por pagina

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
            <th  className="py-2 px-4">
              Cantidad
            </th>
            <th  className="py-2 px-4">
              Fecha
            </th>
            <th className="py-2 px-4">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {paginatedData.map((registro) => (
            <tr
              className="py-2 px-4"
              key={registro._id}
            >
              <th
                scope="row"
                className="py-2 px-4"
              >
                {registro.cantidad}
              </th>
              <td className="py-2 px-4">
                {new Date(registro.fecha).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 md:px-4 lg:px-6">
              <div className="flex mx-1 md:mx-3">
                <Link
                  to={
                    tipo === "Egresos"
                      ? `/actualizarEgreso/${registro._id}`
                      : `/actualizarIngreso/${registro._id}`
                  }
                  className="py-2 px-4 "
                >
                  <BiEdit size={20} className="text-purple-600" />
                </Link>
                <Link className="p-2 "> 
                <RiDeleteBinLine
                  onClick={() => {
                    if (tipo == "Egresos") {
                      deleteEgreso(registro._id);
                    } else {
                      deleteIngreso(registro._id);
                    }}}
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

export default Tabla;

/* 
<button
                  onClick={() => {
                    if (tipo == "Egresos") {
                      deleteEgreso(registro._id);
                    } else {
                      deleteIngreso(registro._id);
                    }
                  }}
                  className=" py-2 px-4"
                >
                  <RiDeleteBinLine
                   size={20} className="text-red-600" />
                </button>
                */