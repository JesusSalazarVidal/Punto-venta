import { useEffect } from "react";
import { useEgresos } from "../Context/EgresosContext";
import Tabla from '../components/Tabla'

function EgresosPage() {
  const { getEgresos, egresos} = useEgresos();

  useEffect(() => {
    getEgresos();
  }, []);

  if(egresos.length === 0) return(<h1>No hay egresos disponibles</h1>)

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-3">Egresos</h1>
      <Tabla data={egresos} tipo={'Egresos'}></Tabla>
    </div>
  );
}

export default EgresosPage;
