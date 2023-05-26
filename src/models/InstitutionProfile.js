import { DataTypes } from 'sequelize'
import sequelize from '../database/config'

const InstitutionProfile = sequelize.define(
	'TblInstitutionProfile',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		about: {
			type: DataTypes.STRING,
		},
		image_url: {
			type: DataTypes.STRING,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'TblUser',
				field: 'id',
			},
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)

export default InstitutionProfile
