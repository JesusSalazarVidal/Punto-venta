import { useEffect } from "react";
import { useIngresos } from "../Context/IngresosContext";
import Tabla from "../components/Tabla";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

function IngresosPage() {
  const { getIngresos, ingresos } = useIngresos();

  useEffect(() => {
    getIngresos();
  }, []);

  if (ingresos.length === 0) return <h1>No hay Ingresos disponibles</h1>;

  return (
    <div className="">
      <div className="sm:ml-64 w-8">
        <Link to={"/crearIngreso"} className="text-pink-800 hover:text-black">
          <AiOutlinePlusSquare size={30} />
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-3">Ingresos</h1>
      <Tabla data={ingresos} tipo={"Ingresos"}></Tabla>
    </div>
  );
}

export default IngresosPage;
