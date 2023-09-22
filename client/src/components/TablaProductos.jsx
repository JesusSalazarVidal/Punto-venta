import Paginator from "./Paginator";
import { useState } from "react";
import { Link } from "react-router-dom";

import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useProduct } from "../Context/ProductContext";

function TablaProductos({data}) {
    const {deleteProducto}= useProduct()
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
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Tipo</th>
            <th className="py-2 px-4">Precio</th>
            <th className="py-2 px-4">Fecha</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {paginatedData.map((registro) => (
            <tr className="py-2 px-4" key={registro._id}>
              <td className="py-2 px-4">
                {registro.nombre}
              </td>
              <td className="py-2 px-4">
                {registro.tipo}
              </td>
              <td className="py-2 px-4">
                {registro.precio}
              </td>
              
              <td className="py-2 px-4">
                {new Date(registro.fecha).toLocaleDateString()}
              </td>
              <td className="py-2 px-4">
                <div className="flex mx-3">
                    <Link to={`/actualizarProducto/${registro._id}`} ><BiEdit size={20} style={{color: "green"}}/></Link>
                    <Link>
                    <RiDeleteBinLine onClick={()=>{deleteProducto(registro._id)}} size={20} style={{color:"red"}}/></Link>
                    
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

export default TablaProductos;
