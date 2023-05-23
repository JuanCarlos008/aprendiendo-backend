// src/server.js
import http from 'http'
import app from './app.js'
import config from './config/config.js'
import sequelize from './database/config.js'

const server = http.createServer(app)

// Database connection
sequelize
	.authenticate()
	.then(() => console.log('Conexión establecida con la base de datos'))
	.catch((err) => console.log('Error al conectar con la base de datos:', err))

// Server connection
server.listen(config.port, () => {
	console.log(`Servidor corriendo en el puerto ${config.port}`)
})
