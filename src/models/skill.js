import { DataTypes } from 'sequelize'
import sequelize from '../database/config.js'

const Skill = sequelize.define(
	'TblSkill',
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
	},
	{
		timestamps: true,
		createdAt: 'creacted_at',
		updatedAt: 'updated_at',
	}
)

export default Skill
