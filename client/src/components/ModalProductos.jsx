import React from "react";
import { useProduct } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function ModalProductos({ isOpen, onClose, tipo }) {
  if (!isOpen) return null;

  const { getProductosByTipo, producto } = useProduct();

  useEffect(() => {
    getProductosByTipo(tipo);
  }, [tipo]);

  return (
    <div className="fixed inset-0 flex items-center z-50">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white w-3/5 h-auto mx-16 p-4 rounded shadow-lg relative z-50">
        {/* Icono en la esquina superior derecha */}
        <div className="absolute top-0 right-0 p-2">
          <FaArrowLeft size={32} onClick={onClose} />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-7">
          {producto &&
            producto.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ModalProductos;
