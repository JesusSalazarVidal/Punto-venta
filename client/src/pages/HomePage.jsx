import { useVentas } from "../Context/VentasContext";
import TablaCuenta from "../components/TablaCuenta";
import TiposProducto from "../components/TiposProducto";

function HomePage() {
  const { cuenta } = useVentas();

  const tipos = [
    { id: 1, tipo: "paletas" },
    { id: 2, tipo: "nieves" },
    { id: 3, tipo: "nachos" },
    { id: 4, tipo: "malteadas" },
  ];
  return (
    <div className="flex mt-16">
      {/* División izquierda (4/6 de la pantalla) */}
      <div className="w-4/6 p-3">
        <div className="grid grid-cols-3 gap-4">
          {tipos.map((tipo) => (
            <TiposProducto key={tipo.id} tipo={tipo.tipo} />
          ))}
        </div>
      </div>

      {/* División derecha (2/6 de la pantalla) */}
      <div className="w-2/6 p-4">
        {/* Aquí puedes colocar la tabla de cuenta */}
        <TablaCuenta data={cuenta}/>
        {/* Por ejemplo, puedes usar una tabla de HTML */}
        
      </div>
    </div>
  );
}

export default HomePage;
