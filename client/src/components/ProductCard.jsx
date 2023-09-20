import { useProduct } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";

function ProductCard({ product }) {
  const { deleteProducto } = useProduct();

  return (
    <div className="p-4 bg-pink-500 hover:bg-pink-300 max-w-md w-full rounded-md border-2 border-pink-700">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{product.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="text-red-600 hover:text-black"
            onClick={() => {
              deleteProducto(product._id);
            }}
          >
            <FiTrash2 />
          </button>
          <Link
            to={`/obtenerProducto/${product._id}`}
            className="text-red-600 hover:text-black"
          >
            <FiEdit3 />
          </Link>
        </div>
      </header>
      <p className="text-slate-800">Tipo: {product.tipo}</p>
      <p className="text-slate-800">Precio: ${product.precio}</p>
    </div>
  );
}

export default ProductCard;

//<p>{new Date(product.fecha).toLocaleDateString()}</p>