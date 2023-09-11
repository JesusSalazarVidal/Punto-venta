import { useEffect } from "react";
import { useIngresos } from "../Context/IngresosContext";
import Tabla from '../components/Tabla'

function IngresosPage() {
  const { getIngresos, ingresos} = useIngresos();

  useEffect(() => {
    getIngresos();
  }, []);

  if(ingresos.length === 0) return(<h1>No hay Ingresos disponibles</h1>)

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-3">Ingresos</h1>
      <Tabla data={ingresos} tipo={'Ingresos'}></Tabla>
    </div>
  );
}

export default IngresosPage;
