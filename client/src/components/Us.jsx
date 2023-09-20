import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

function Us() {
    const { logout, usuario } = useAuth();
  return (
    <div className="bg-pink-300 p-4 absolute top-0 right-20 mt-14">
      <ul className="px-4 py-3">
        <li className="mb-2">
          <>
            <li className="mb-2 font-black text-center text-2xl"> {usuario.nombre}</li>
            <li className="mb-2"> Usuario: {usuario.nombreUsuario}</li>
            <li>
            <Link to={"/egresos/new"}>new egreso</Link>
            </li>
            <li className="mb-2">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Salir
              </Link>
            </li>
          </>
        </li>
      </ul>
    </div>
  )
}

export default Us