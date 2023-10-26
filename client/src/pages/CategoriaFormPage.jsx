import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";

function CategoriaFormPage({ idCategoria }) {
  const { register, handleSubmit, setValue } = useForm();
  const { createCategoria, getTipos, tipos} = useProduct();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState();
  

  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario y sus valores iniciales
    nombre: "",
    tipo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = handleSubmit((data) => {
    createCategoria(data);
    // Muestra el mensaje de confirmación
    setMostrarMensaje(true);
    // Reinicia los campos del formulario
    setFormData({
      nombre: "",
    });
  });

  useEffect(() => {
    let timeout;
    if (mostrarMensaje) {
      timeout = setTimeout(() => {
        setMostrarMensaje(false);
      }, 1500); // Oculta el mensaje después de 1.5 segundos
    }
    return () => clearTimeout(timeout);
  }, [mostrarMensaje]);

  return (
    <div>
      {mostrarMensaje && (
        <div
          className="bg-purple-100 border-t-4 border-purple-500 rounded-b text-purple-900 px-4 py-3 shadow-md flex items-center justify-between m-5 font-bold"
          role="alert"
        >
          <p className="text-sm">
            {isUpdateMode
              ? "¡Agregado correctamente!"
              : "¡Actualizado correctamente!"}
          </p>
        </div>
      )}
      <div className="">
        <div className="flex justify-center items-center ">
          <div className="w-full">
            <h1>Agregar categoria</h1>
            <form
              onSubmit={onSubmit}
              className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 border-2 border-pink-800"
            >
              <div className="mb-4">
                <h1 className="text-center font-black">
                  {/* {isUpdateMode ? (  "Agregar Ingreso" ) : ( "Editar ingreso" )} */}
                </h1>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre
                </label>

                <input
                  type="text"
                  {...register("nombre")}
                  className="wshadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tipo
                </label>
                <select
                  {...register("tipo")}
                  className=" shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- Selecciona --</option>
                  {tipos.map((tipo)=>(
                    <option key={tipo._id} value={tipo.nombre}>{tipo.nombre}</option>
                  ))}
                </select>

                
              </div>

              <button
                className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  w-full rounded"
                type="submit"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriaFormPage;
