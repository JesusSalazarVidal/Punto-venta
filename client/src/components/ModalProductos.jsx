import React from "react";
import { useProduct } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

function ModalProductos({ isOpen, onClose, tipo }) {
  if (!isOpen) return null;

  const { getProductosByTipo, producto } = useProduct();

  useEffect(() => {
    getProductosByTipo(tipo);
  }, [tipo]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white w-2/4 p-4 rounded shadow-lg z-50">
        {/* Contenido del modal */}
        <div className="grid grid-cols-3 gap-4">
          {producto && producto.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <button className="btn btn-primary mt-4" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalProductos;
