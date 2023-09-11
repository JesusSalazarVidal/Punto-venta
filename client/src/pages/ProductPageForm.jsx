import {useForm} from "react-hook-form";
import { useProduct } from "../Context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductPageForm() {
    const {register, handleSubmit, setValue} = useForm();
    const {createProducto, getProducto, updateProducto} = useProduct();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      async function loadProducto(){
        if (params.id) {
          const product = await getProducto(params.id);
          console.log(product)
          setValue('nombre',product.nombre)
          setValue('tipo', product.tipo)
          setValue('precio', product.precio)
        }
      }
      loadProducto()
    }, [])
    
    const onSubmit = handleSubmit((data) => {
        if (params.id) {
          updateProducto(params.id, data)
        } else {
          createProducto(data);        
        }
        navigate('/obtenerProductos')
    })

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center bg-pink-400">
      <div className="w-full max-w-xs">
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <h1 className="text-center font-black">AGREGAR PRODUCTO</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input {...register("nombre")} className='shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo
            </label>
            <input {...register("tipo")} className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Precio
            </label>
            <input {...register("precio")} className="shadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></input>
          </div>
          <div>
            <button className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  w-full rounded" type='submit'>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductPageForm;
