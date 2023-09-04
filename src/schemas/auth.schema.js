import {z} from 'zod'

export const registerSchema = z.object({
    nombreUsuario: z.string({
        required_error: 'Nombre de Usuario es requerido'
    }),
    nombre: z.string({
        required_error: 'El nombre es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener por lo menos 6 caracteres'
    })

})


export const loginSchema = z.object({
    nombreUsuario: z.string({
        required_error: "El nombre de usuario es requerido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6, {
        message:"La contraseña debe tener al menos 6 caracteres"
    })
})