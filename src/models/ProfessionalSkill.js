import sequelize from '../database/config.js'

const ProfessionalSkill = sequelize.define(
	'TblProfessionalSkill',
	{
		id: {
			type: sequelize.Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		skill_id: {
			type: sequelize.Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'TblSkill',
				field: 'id',
			},
		},
		user_id: {
			type: sequelize.Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'TblUser',
				field: 'id',
			},
		},
	},
	{
		timestamps: false,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)
