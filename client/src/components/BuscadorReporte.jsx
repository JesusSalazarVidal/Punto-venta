import { useState } from "react";

function BuscadorReporte({ onSearch }) {
  const [fecha, setFecha] = useState("");
  const handleSearch = () => {
    onSearch(fecha);
  };
  return (
    <div>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button className="mx-3" onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default BuscadorReporte;
