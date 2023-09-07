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
              <Link to="/crearProducto">Nuevo Producto</Link>
            </li>
            <li>
              <Link to="/obtenerProductos">Productos</Link>
            </li>
            <li>
              <Link to="/crearVenta">Nueva Venta</Link>
            </li>
            <li>
              <Link to="/obtenerVentas">Ventas</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>{logout();}}>Salir</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
