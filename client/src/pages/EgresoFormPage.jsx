import { useForm } from "react-hook-form";
import { useEgresos } from "../Context/EgresosContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarMenu from "../components/SidebarMenu";

function EgresoFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createEgreso, getEgreso, updateEgreso } = useEgresos();
  const navigate = useNavigate();
  const params = useParams();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario y sus valores iniciales
    cantidad: "",
    descripcion: "",
    
  });

  const handleChange = (data) => {
    const { name, value } = data.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    async function loadEgreso() {
      if (params.id) {
        const egreso = await getEgreso(params.id);
        console.log(egreso);
        setValue("cantidad", egreso.cantidad);
      }
    }
    loadEgreso();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateEgreso(params.id, data);
    } else {
      createEgreso(data);
      // Muestra el mensaje de confirmación
      setMostrarMensaje(true);
      // Reinicia los campos del formulario
      setFormData({
        cantidad: "",
        descripcion: "",
      });
    }

    //navigate('/obtenerEgresos');
  });

  useEffect(() => {
    let timeout;
    if (mostrarMensaje) {
      timeout = setTimeout(() => {
        setMostrarMensaje(false);
      }, 3000); // Oculta el mensaje después de 3 segundos
    }
    return () => clearTimeout(timeout);
  }, [mostrarMensaje]);

  return (
    <div>
      <div className="flex h-[calc(100vh-100px)] justify-center mt-20 items-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={onSubmit}
            className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-pink-800"
          >
            <div className="mb-4">
              <h1 className="text-center font-black">AGREGAR EGRESO</h1>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cantidad
              </label>
              <input
                type="text"
                {...register("cantidad")}
                className="wshadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                value={formData.cantidad}
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Descripcion
              </label>
              <input
                type="textArea"
                {...register("descripcion")}
                className="wshadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline resize-none"
                value={formData.descripcion}
                onChange={handleChange}
                autoFocus
              />
            </div>
            <button
              className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  w-full rounded"
              type="submit"
            >
              Guardar
            </button>
          </form>
          {mostrarMensaje && (
            <p className="font-bold">
              ¡El Egreso se ha guardado correctamente!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EgresoFormPage;
