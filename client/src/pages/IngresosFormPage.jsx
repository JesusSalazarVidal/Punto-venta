import {useForm} from 'react-hook-form'
import { useIngresos } from '../Context/IngresosContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';

function IngresoFormPage() {
    const {register, handleSubmit, setValue} = useForm();
    const {createIngreso, getIngreso, updateIngreso} = useIngresos()
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
      async function loadIngreso() {
        if(params.id){
          const ingreso = await getIngreso(params.id)
          console.log(ingreso)
          setValue('cantidad', ingreso.cantidad)
        }
      }
      loadIngreso()
    }, [])

    const onSubmit = handleSubmit((data)=>{
      if(params.id){
        updateIngreso(params.id, data)
      }else{
        createIngreso(data)
      }
      navigate('/ingresos')
      
    })
  return (
    <div className='flex h-[calc(100vh-100px)] sm:ml-64 justify-center items-center bg-pink-400'>
        <div className='w-full max-w-xs'>
        <form onSubmit={onSubmit} className='bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4'> 
        <div className="mb-4">
            <h1 className="text-center font-black">AGREGAR INGRESO</h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cantidad
            </label>
            <input type="text" {...register("cantidad")} className='wshadow appearance-none border border-pink-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' autoFocus />
            
          </div>

            <button className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  w-full rounded" type='submit'>Guardar</button>
        </form>
        </div>
    </div>
  )
}

export default IngresoFormPage