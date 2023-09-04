import z from 'zod'

export const crearEgresoSchema = z.object({
    cantidad: z.number({
        required_error: "La cantidad es requerida"
    })
})