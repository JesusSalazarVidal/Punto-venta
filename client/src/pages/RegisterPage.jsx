import {useForm} from 'react-hook-form'
import {useAuth} from '../Context/AuthContext'
import {useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function RegisterPage() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {signup, isAuthenticated, errors: RegisterErrors} = useAuth()
    const navigate = useNavigate()
    console.log(RegisterErrors)

    useEffect(()=>{
      if(isAuthenticated) navigate("/inicio")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async(values)=>{
        signup(values)
    })
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        RegisterErrors.map((error, i) => (
          <div className='bg-red-500 text-white' key={i}>{error}</div>
        ))
      }
        <form onSubmit={onSubmit}>
            <input type="text" {...register("nombreUsuario", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Nombre de Usuario' />
            {errors.nombreUsuario && (
              <p className='text-red-500'>Nombre de usuario es requerido</p>
            )}
            <input type="text" {...register("nombre", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Nombre'/>
            {errors.nombre && (
              <p className='text-red-500'>El nombre es requerido</p>
            )}
            <input type="password" {...register("password", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Contraseña'/>
            {errors.password && (
              <p className='text-red-500'>La contraseña es requerida</p>
            )}
            <input type="text" {...register("huella", {required: true})} className='w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2' placeholder='Huella'/>
            {errors.huella && (
              <p className='text-red-500'>La huella es requerida</p>
            )}

            <button type='submit'>Registrar</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Ya tienes una cuenta? <Link className="text-sky-500" to="/login">Login</Link>
        </p>
    </div>
  )
}

export default RegisterPage