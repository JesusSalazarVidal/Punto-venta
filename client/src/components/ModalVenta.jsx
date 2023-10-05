import DetalleVenta from "./DetalleVenta";

import { AiOutlineClose } from "react-icons/ai";

function ModalVenta({ isOpen, onClose, registro }) {
    if(!isOpen) return null 

  
  console.log(registro)
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-pink-300 w-2/4 p-8 rounded shadow-lg z-50">
        {/* Contenido del modal */}
        <AiOutlineClose size={32} onClick={onClose} style={{color:"red"}}/>

        <DetalleVenta vent={registro} />
      </div>
    </div>
  );
}

export default ModalVenta;