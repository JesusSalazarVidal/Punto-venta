import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Logo from "../img/logo.png"

function Navbar() {
    const { isAuthenticated, logout, usuario } = useAuth();

  return (
    <nav className="bg-emerald-300 my-3 flex justify-between py-5 px-10 border-2 border-pink-700">
      <Link className="flex ">
        <img className="w-14 mr-4 md:mr-10 lg:mr-96 " src={Logo}/>
        <h1 className="text-2xl font-bold">La Michoacana</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Welcome {usuario.nombreUsuario}</li>
            <li>
              <Link to="/crearProducto">CrearProducto</Link>
            </li>
            <li>
              <Link to="/obtenerProductos">Productos</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>{logout();}}>Logout</Link>
            </li>
          </>
        ) : (
          <>
          <li>
            hola
          </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Registrar</Link>
            </li>
            <li>
              <Link to="/crearProducto">CrearProducto</Link>
            </li>
            <li>
              <Link to="/obtenerProductos">Productos</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>{logout();}}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
