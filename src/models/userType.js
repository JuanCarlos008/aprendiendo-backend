import { DataTypes } from 'sequelize'
import sequelize from '../database/config.js'

const UserType = sequelize.define(
	'TblUser_Type',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.ENUM('admin', 'professional', 'institution'),
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'tbluser_type',
	}
)

export default UserType
