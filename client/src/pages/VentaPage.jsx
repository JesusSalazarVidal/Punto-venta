import React, { useEffect } from 'react'
import { useVentas } from '../Context/VentasContext'
import {useProduct} from '../Context/ProductContext'
import VentaCard from '../components/VentaCard';

function VentaPage() {
  const {getVentas, venta} = useVentas();
  const {getProductos, producto} = useProduct();

  useEffect(() => {
    getVentas()
    getProductos()
  }, [])

  if (venta.length === 0) return (<h1>No Hay Ventas</h1>)

  return (
    <div className="grid ">
        {venta.map((vent) => {
          // Busca el producto correspondiente por su productId
          const pro = producto.find((product) => product._id === '64ee2d1ecacd5a7680346964');
          console.log(pro)
          // Asegúrate de que el producto exista antes de mostrarlo
          if (pro) {
            return (
              <VentaCard vent={vent} pro={pro} key={vent._id}/>
            );
          }
          return null; // Ignora ventas con productos no encontrados
        })}
    </div>
  )
}

export default VentaPage