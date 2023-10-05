import { useForm } from "react-hook-form";
import { useProduct } from "../Context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarMenu from "../components/SidebarMenu";

function ProductPageForm() {
    const {register, handleSubmit, setValue} = useForm();
    const {createProducto, getProducto, updateProducto} = useProduct();
    const navigate = useNavigate();
    const params = useParams();
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const [formData, setFormData] = useState({
    // Define aquí los campos de tu formulario y sus valores iniciales
    nombre: "",
    tipo: "",
    precio:"",

  });

  const handleChange = (data) => {
    const { name, value } = data.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        const product = await getProducto(params.id);
        console.log(product);
        setValue("image", product.image);
        setValue("nombre", product.nombre);
        setValue("tipo", product.tipo);
        setValue("precio", product.precio);
      }
      loadProducto()
    }}, [])
    
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
          updateProducto(params.id, data)
        } else {
          createProducto(data);  
          // Muestra el mensaje de confirmación
          setMostrarMensaje(true);
          // Reinicia los campos del formulario
          setFormData({
            nombre: "",
            tipo: "",
            precio:"",
          });      
        }
        //navigate('/obtenerProductos')
    }) 

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
      <SidebarMenu />
      <div className="flex h-[calc(100vh-100px)] sm:ml-64 justify-center items-center mt-20 bg-pink-400">
        <div className="w-full max-w-xs">
          <form
            onSubmit={onSubmit}
            className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          >
            <div className="mb-4">
              <h1 className="text-center font-black">AGREGAR PRODUCTO</h1>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                {...register("nombre")}
                className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>

            <div className="mb-4 suppliers-container">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tipo
              </label>
              <select
                {...register("tipo")}
                className=" shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- Selecciona --</option>
                <option value="Paletas">Paletas</option>
                <option value="Nives">Nieves</option>
                <option value="Malteadas">Maltedas</option>
                <option value="Nachos">Nachos</option>
                <option value="Aguas">Aguas</option>

                
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2">
                Precio
              </label>
              <input
                type="text"
                {...register("precio")}
                className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
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
