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
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 ">
        {venta.map((vent, index) => {
          // Busca el producto correspondiente por su productId
          const resultado = producto.find((product) => product._id === vent.productos);
          console.log(resultado)
          // Asegúrate de que el producto exista antes de mostrarlo
          if (resultado) {
            return (
              <VentaCard vent={vent} key={index} resultado={resultado}/>
            );
          }
          return null; // Ignora ventas con productos no encontrados
        })}
    </div>
  )
}

export default VentaPage