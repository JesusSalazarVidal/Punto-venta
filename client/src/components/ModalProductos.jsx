import React, { useState } from "react";
import { useProduct } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function ModalProductos({ isOpen, onClose, tipo }) {
  if (!isOpen) return null;

  const Categoria = ["Agua", "Leche"];
  const [categoriaSelected, setCategoriaSelected] = useState(null);

  const {
    getProductosByTipo,
    producto,
    getProductosByCategoria,
    categoriaProductos,
    getCategoriasByTipo,
    categorias,
  } = useProduct();

  useEffect(() => {
    getCategoriasByTipo(tipo);
    getProductosByTipo(tipo);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center z-50">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white w-3/5 h-auto mx-16 p-4 rounded shadow-lg relative z-50">
        {/* Icono en la esquina superior derecha */}
        <div className="absolute top-0 right-0 p-2">
          <FaArrowLeft
            size={32}
            onClick={() => {
              if (categoriaSelected) {
                setCategoriaSelected(false);
              } else {
                onClose();
              }
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-7">
          {!categoriaSelected
            ? categorias.map((categoria) => (
                <div
                  key={categoria._id}
                  onClick={() => {
                    getProductosByCategoria(categoria.nombre);
                    setCategoriaSelected(true);
                  }}
                  className="relative p-4 shadow-lg cursor-pointer rounded:md border bg-pink-300 hover:bg-purple-300"
                >
                  <h1> {categoria.nombre} </h1>
                </div>
              ))
            : categoriaProductos &&
              categoriaProductos.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ModalProductos;
