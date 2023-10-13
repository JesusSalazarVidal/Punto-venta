import { useEffect } from "react";
import { useIngresos } from "../Context/IngresosContext";
import Tabla from "../components/Tabla";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";

function IngresosPage() {
  const { getIngresos, ingresos } = useIngresos();

  useEffect(() => {
    getIngresos();
  }, []);

  if (ingresos.length === 0) return <h1>No hay Ingresos disponibles</h1>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-3 md:mt-0">Ingresos</h1>
      <Tabla data={ingresos} tipo={"Ingresos"}></Tabla>
    </div>
  );
}

export default IngresosPage;
