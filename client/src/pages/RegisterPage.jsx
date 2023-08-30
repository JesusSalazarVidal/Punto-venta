import {useForm} from 'react-hook-form'
import {useAuth} from '../Context/AuthContext'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function RegisterPage() {
    const {register, handleSubmit} = useForm()
    const {signup, isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
      if(isAuthenticated) navigate("/inicio")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async(values)=>{
        signup(values)
    })
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        <form onSubmit={onSubmit}>
            <input type="text" {...register("nombreUsuario", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Nombre de Usuario' />
            <input type="text" {...register("nombre", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Nombre'/>
            <input type="password" {...register("password", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Contraseña'/>
            <input type="text" {...register("huella", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Huella'/>

            <button type='submit'>Registrar</button>
        </form>
    </div>
  )
}

export default RegisterPage