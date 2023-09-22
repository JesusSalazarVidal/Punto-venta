import { useEffect } from "react";
import { useEgresos } from "../Context/EgresosContext";
import Tabla from '../components/Tabla'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";

function EgresosPage() {
  const { getEgresos, egresos} = useEgresos();


  useEffect(() => {
    getEgresos();
  }, []);

  if(egresos.length === 0) return(<h1>No hay egresos disponibles</h1>)

  return (
    <div>
      <SidebarMenu/>
      <div className="sm:ml-64 w-8 mt-20">
        <Link to={"/egresos/new"} className="text-pink-800 hover:text-black">
          <AiOutlinePlusSquare size={30} />
        </Link> 
      </div>
      <h1 className="text-3xl font-bold text-center mb-3">Egresos</h1>
      <Tabla data={egresos} tipo={'Egresos'}></Tabla>
    </div>
  );
}

export default EgresosPage;
