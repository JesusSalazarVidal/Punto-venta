import { useEffect } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useVentas } from "../Context/VentasContext";
import TablaVentas from "../components/TablaVentas2";
import SidebarMenu from "../components/SidebarMenu";

function VentasPage() {
    const {venta, getVentas}= useVentas()

    useEffect(()=>{
        getVentas();
    }, []);
    console.log(venta)

    if(venta.length === 0) return(<h1>No hay ventas registradas</h1>)
  return (
    <div>
      <SidebarMenu/>
      <div className="sm:ml-64 w-8 mt-20"> 
      </div>
      <h1 className="text-3xl font-bold text-center mb-3">Ventas</h1>
      <TablaVentas data={venta}></TablaVentas>
    </div>
  )
}

export default VentasPage