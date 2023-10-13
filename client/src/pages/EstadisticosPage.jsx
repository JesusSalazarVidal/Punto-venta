import React, { useState } from "react";
import BuscadorReporte from "../components/BuscadorReporte";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import { useIngresos } from "../Context/IngresosContext";

function EstadisticosPage() {
  const [resultados, setResultados] = useState([]);
  
  const{getIngresosByFecha, ingresos}= useIngresos()

  const handleSearch = (fecha) => {
    getIngresosByFecha(fecha)
  };
  return (
    <div className="App">
      <h1>Buscador de Ingresos</h1>
      <BuscadorReporte onSearch={handleSearch} />
      <ResultadosBusqueda resultadosEncontrados={ingresos}/>
    </div>
  );
}

export default EstadisticosPage;
