import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext"
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import TablaProductos from "../components/TablaProductos";
import SidebarMenu from "../components/SidebarMenu";


function ProductPage() {
    const { getProductos, producto } = useProduct();

    useEffect(() => {
      getProductos()
  }, [])
  console.log(producto)
  
  

   if (producto.length === 0) return (<h1>No Hay Productos</h1>)

  return (
    <div>
      <SidebarMenu />
      <div className="sm:ml-64 w-8 mt-20">
      <Link
            to={"/crearProducto"}
            className="text-pink-800 hover:text-black"
          >
            <AiOutlinePlusSquare size={30} />
          </Link>
      </div>
      <h1 className='text-3xl font-bold text-center '>Productos</h1>
      <TablaProductos data={producto}></TablaProductos>
    
      
    </div>
  )
}

export default ProductPage

/*
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 ">
       {producto.map((product) => (
            <ProductCard product={product} key={product._id} />
        ))}
    </div> */
