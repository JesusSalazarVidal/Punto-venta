import { useProduct } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { useVentas } from "../Context/VentasContext";

function ProductCard({ product }) {
  
  const { deleteProducto } = useProduct();
  const {cuenta, setCuenta}= useVentas()

  function handleAgregarProducto() {
    
   /*
    //Agrega el producto seleccionado a la cuenta
    const nuevoProducto = { ...product };
    console.log(nuevoProducto) // Clona el producto para evitar mutaciones no deseadas
    setCuenta((prevCuenta) => ({
      ...prevCuenta,
      productos: [...prevCuenta.productos, nuevoProducto],
      total: prevCuenta.total + nuevoProducto.precio,
    }));
    */
    const nuevoProducto = { ...product };
    const prevProductos = cuenta.productos;
    
    // Verificar si el producto ya existe en el array de productos
    const productoExistenteIndex = prevProductos.findIndex(
      (producto) => producto._id === nuevoProducto._id
    );
    
    if (productoExistenteIndex !== -1) {
      // Si el producto ya existe, aumenta la cantidad en lugar de agregarlo
      prevProductos[productoExistenteIndex].cantidad += 1;
    } else {
      // Si el producto no existe, agrégalo a la cuenta con cantidad 1
      nuevoProducto.cantidad = 1;
      prevProductos.push(nuevoProducto);
    }
    
    // Calcular el nuevo total
    const nuevoTotal = prevProductos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    
    // Actualiza la cuenta con los productos y el nuevo total
    setCuenta((prevCuenta) => ({
      ...prevCuenta,
      productos: prevProductos,
      total: nuevoTotal,
    }));
    
  }
  //console.log(cuenta)
  
  return (
    <div onClick={handleAgregarProducto} className="bg-pink-300 hover:bg-purple-400 max-w-md w-full p-10 rounded-md border-2 border-pink-700">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{product.nombre}</h1>
      </header>
      <p className="text-slate-800">Tipo: {product.tipo}</p>
      <p className="text-slate-800">Precio: ${product.precio}</p>
    </div>
  );
}

export default ProductCard;

//<p>{new Date(product.fecha).toLocaleDateString()}</p>