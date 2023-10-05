import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import ModalProductos from "../components/ModalProductos";

import paletas from "../img/paletas.png";
import maltedas from "../img/malteadas.png";
import nachos from "../img/nachos.png";
import nieves from "../img/nieves.png";
import ProductCard from "../components/ProductCard";

function TiposProducto({ tipo }) {
  const [isModalOpen, setModalOpen] = useState(false);
  // rastrear si el elemento esta seleccionado
  const [isSelected, setIsSelected] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setIsSelected(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsSelected(false);
  };
  return (
    <>
      <div
        onClick={openModal}
        className={`max-w-md w-full p-10 rounded-md border-2 ${
          isSelected ? 'bg-purple-400' : 'bg-pink-300 hover:bg-purple-400'
        } border-pink-700`}  
      >
        <header className="flex justify-center">
          <h1 className="text-2xl font-bold">{tipo}</h1>
        </header>
        <img
          src={
            tipo === "paletas"
              ? paletas
              : tipo === "malteadas"
              ? maltedas
              : tipo === "nachos"? nachos : nieves         }
          alt={tipo}
          className="w-40 h-auto object-cover mb-2"
        />
      </div>
      <ModalProductos isOpen={isModalOpen} onClose={closeModal} tipo={tipo} />
    </>
  );
}

export default TiposProducto;
