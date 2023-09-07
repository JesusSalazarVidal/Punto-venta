import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('./obtenerProductos') 
  }, [isAuthenticated])

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-700 max-w-md w-full p-10 rounded-md">
        
        <h1 className="text-2xl font-bold">Login</h1>
        {
        signinErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white' key={i}>{error}</div>
        ))
      }
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("nombreUsuario", { required: true })}
            className="w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre de Usuario"
          />
          {errors.nombreUsuario && (
            <p className="text-red-500">Nombre de usuario es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-emerald-950 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}

          <button type="submit">Iniciar sesión</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes una cuenta? <Link className="text-sky-500" to="/register">Sing up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
