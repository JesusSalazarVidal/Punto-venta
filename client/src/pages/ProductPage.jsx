import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext"
import ProductCard from "../components/ProductCard";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import Paginator from "../components/Paginator"
import { FiDivideSquare } from "react-icons/fi";


function ProductPage() {
    const { getProductos, producto } = useProduct();

    // Estados para el paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Cambia este valor según tus necesidades numero de elementos por pagina

  // Calcula el total de páginas
  const totalPages = Math.ceil(producto.length / itemsPerPage);

  
  // Función para cambiar la página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filtra los datos según la página actual
  const paginatedData = producto.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    useEffect(() => {
      getProductos()
  }, [])
  
  

   if (producto.length === 0) return (<h1>No Hay Productos</h1>)

  return (
    <div className="sm:ml-64">
      <div className="w-8">
      <Link
            to={"/crearProducto"}
            className="text-pink-800 hover:text-black"
          >
            <AiOutlinePlusSquare size={30} />
          </Link>
      </div>
      <h1 className='text-3xl font-bold text-center pb-5 mb-3'>Productos</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 ">
      {/* Renderiza tus elementos paginados aquí */}
      {paginatedData.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
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
