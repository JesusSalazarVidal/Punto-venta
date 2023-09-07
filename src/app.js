import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import egresoRoutes from './routes/egreso.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', egresoRoutes);
app.use('/api/', usuarioRoutes);

export default app