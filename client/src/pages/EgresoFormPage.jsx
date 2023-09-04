import {useForm} from 'react-hook-form'
function EgresoFormPage() {
    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit((data) =>{
        console.log(data)
    })
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Cantidad' {...register("cantidad")} autoFocus />

            <button>Guardar</button>
        </form>
    </div>
  )
}

export default EgresoFormPage