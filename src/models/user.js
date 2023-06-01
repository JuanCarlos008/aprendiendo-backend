// src/models/user.js
import { DataTypes } from 'sequelize'
import sequelize from '../database/config.js'

const User = sequelize.define(
	'TblUser',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
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
		user_type_id: {
			type: DataTypes.ENUM('admin', 'professional', 'institution'),
			allowNull: false,
			references: {
				model: 'TblUserType',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'tbluser',
	}
)

export default User
