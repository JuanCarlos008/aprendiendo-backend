// src/config/config.js
// src/config/config.js
import dotenv from 'dotenv'

dotenv.config()

const config = {
	port: process.env.PORT || 3000,
	jwtSecret: process.env.JWT_SECRET,
	jwtExpirationTime: process.env.JWT_EXPIRATION_TIME || '1h',
	database: {
		name: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
}

export default config
