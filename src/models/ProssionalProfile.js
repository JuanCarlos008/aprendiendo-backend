import { DataTypes } from 'sequelize'
import sequelize from '../database/config'

const ProfessionalProfile = sequelize.define(
	'TblProfessionalProfile',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(75),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		about: {
			type: DataTypes.STRING(500),
		},
		cv_url: {
			type: DataTypes.STRING(300),
			allowNull: false,
		},
		porfolio_url: {
			type: DataTypes.STRING(300),
		},
		image_url: {
			type: DataTypes.STRING(300),
		},
		gender: {
			type: DataTypes.ENUM('male', 'female'),
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TblUser',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)

export default ProfessionalProfile
