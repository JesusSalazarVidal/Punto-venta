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
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Cantidad' {...register("cantidad")} className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2' autoFocus />

            <button>Guardar</button>
        </form>
    </div>
  )
}

export default IngresoFormPage