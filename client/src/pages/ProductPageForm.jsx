import { useForm } from "react-hook-form";
import { useProduct } from "../Context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarMenu from "../components/SidebarMenu";

function ProductPageForm({ id }) {
  const { register, handleSubmit, setValue } = useForm();
  const { createProducto, getProducto, updateProducto } = useProduct();
  const navigate = useNavigate();
  const params = useParams();
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState();

  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario y sus valores iniciales
    nombre: "",
    tipo: "",
    precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    async function loadProducto() {
      if (id) {
        const product = await getProducto(id);
        console.log(product);
        setValue("image", product.image);
        setValue("nombre", product.nombre);
        setValue("tipo", product.tipo);
        setValue("precio", product.precio);
      }
    }
    loadProducto();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (id) {
      updateProducto(id, data);
      setIsUpdateMode(false);
      setMostrarMensaje(true);
    } else {
      setIsUpdateMode(true);
      createProducto(data);
      // Muestra el mensaje de confirmación
      setMostrarMensaje(true);
      // Reinicia los campos del formulario
      setFormData({
        nombre: "",
        tipo: "",
        precio: "",
      });
    }
    //navigate("/sidebarMenu");
  });

  useEffect(() => {
    let timeout;
    if (mostrarMensaje) {
      timeout = setTimeout(() => {
        setMostrarMensaje(false);
      }, 1500); // Oculta el mensaje después de 3 segundos
    }
    return () => clearTimeout(timeout);
  }, [mostrarMensaje]);

  return (
    <div className="">
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
      <div className="flex justify-center items-center  ">
        <div className="w-full ">
          <form
            onSubmit={onSubmit}
            className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8  border-2 border-pink-800"
          >
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Nombre
              </label>
              {isUpdateMode ? (
                <input
                  type="text"
                  {...register("nombre")}
                  className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  {...register("nombre")}
                  className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Tipo
              </label>
              {isUpdateMode ? (
                <select
                  {...register("tipo")}
                  className=" shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="Paletas">Paletas</option>
                  <option value="Nieves">Nieves</option>
                  <option value="Malteadas">Maltedas</option>
                  <option value="Nachos">Nachos</option>
                  <option value="Aguas">Aguas</option>
                  <option value="Otros">Otros</option>
                </select>
              ) : (
                <select
                  {...register("tipo")}
                  className=" shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- Selecciona --</option>
                  <option value="Paletas">Paletas</option>
                  <option value="Nieves">Nieves</option>
                  <option value="Malteadas">Maltedas</option>
                  <option value="Nachos">Nachos</option>
                  <option value="Aguas">Aguas</option>
                </select>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Precio
              </label>
              {isUpdateMode ? (
                <input
                  type="text"
                  {...register("precio")}
                  className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.precio}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type="text"
                  {...register("precio")}
                  className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
            <div>
              <button
                className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  w-full rounded"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductPageForm;
