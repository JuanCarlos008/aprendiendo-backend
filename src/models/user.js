// src/models/user.js
import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const User = sequelize.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('admin', 'employer', 'professional'),
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default User
