import {useForm} from 'react-hook-form'
import { useEgresos } from '../Context/EgresosContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';

function EgresoFormPage() {
    const {register, handleSubmit, setValue} = useForm();
    const {createEgreso, getEgreso, updateEgreso} = useEgresos()
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
      async function loadEgreso() {
        if(params.id){
          const egreso = await getEgreso(params.id)
          console.log(egreso)
          setValue('cantidad', egreso.cantidad)
        }
      }
      loadEgreso()
    }, [])

    const onSubmit = handleSubmit((data)=>{
      if(params.id){
        updateEgreso(params.id, data)
      }else{
        createEgreso(data)
      }
      navigate('/egresos')
      
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

export default EgresoFormPage