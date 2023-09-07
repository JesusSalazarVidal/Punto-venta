import { useEffect } from "react";
import { useProduct } from "../Context/ProductContext"
import ProductCard from "../components/ProductCard";

function ProductPage() {
    const { getProductos, producto } = useProduct();

    useEffect(() => {
        getProductos()
    }, [])

   if (producto.length === 0) return (<h1>No Hay Productos</h1>)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
        {producto.map((product) => (
            <ProductCard product={product} key={product._id} />
        ))}
    </div>
  )
}

export default ProductPage