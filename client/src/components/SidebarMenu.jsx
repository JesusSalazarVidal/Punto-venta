import { Link } from "react-router-dom";
import { TiChartLine } from "react-icons/ti";
import { CgShoppingBag } from "react-icons/cg";
import { TbBusinessplan, TbCoin } from "react-icons/tb";
import Nav from "../components/Nav";
import Logo from "../img/logo.png";

function SidebarMenu() {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 mt-1 overflow-y-auto bg-emerald-300 border-r-2 border-l-2 border-pink-800 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 mt-2 text-gray-900 rounded-lg dark:text-white hover:bg-pink-500 dark:hover:bg-gray-700 group">
                <CgShoppingBag className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <Link to="/obtenerProductos" className="p-2 font-bold">
                  Productos
                </Link>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-pink-500 dark:hover:bg-gray-700 group">
                <TiChartLine className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <Link to="/obtenerVentas" className="p-2 font-bold">
                  Ventas
                </Link>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-pink-500 dark:hover:bg-gray-700 group">
                <TbCoin className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <Link to="/obtenerEgresos" className="p-2 font-bold">
                  Egresos
                </Link>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-pink-500 dark:hover:bg-gray-700 group">
                <TbBusinessplan className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <Link to="/ingresos" className="p-2 font-bold">
                  Ingresos
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" sm:ml-64">
        
      </div>
    </div>
  );
}

export default SidebarMenu;
