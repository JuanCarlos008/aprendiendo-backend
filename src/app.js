// src/app.js
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import authRoutes from './modules/user/routes/auth.js'
import userRoutes from './modules/user/routes/user.js'

dotenv.config()

const app = express()

// Middlewares
app.use(express.json())

// Politica de cors
const allowedOrigins = ['*']

/* app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true)

			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = 'La política de CORS impide la solicitud desde este origen'
				return callback(new Error(msg), false)
			}

			return callback(null, true)
		},
	})
) */

//
app.use(helmet())
app.use(morgan('dev'))

// Routes
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

// Error handling
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).json({ message: 'Error interno del servidor' })
})

export default app
