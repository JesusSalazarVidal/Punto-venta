import { Link } from "react-router-dom";
import { useUsuarios } from "../Context/UsuariosContext";

function TablaUsuarios({ data }) {
  //Verificamos si el arreglo de datos esta vacio o es nulo
  if (!data.length === 0) return <h1>No hay datos siponibles</h1>;
  const {deleteUsuario} = useUsuarios()
  return (
    <div className="relative flex mx-6 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={usuario._id}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {usuario.nombre}
              </th>
              <td className="px-6 py-4"> {usuario.nombreUsuario} </td>
              <td className="px-6 py-4 text-center">
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
    </div>
  );
}

export default TablaUsuarios;