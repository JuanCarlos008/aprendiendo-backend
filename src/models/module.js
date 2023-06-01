const Module = sequelize.define(
	'TblModulo',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		position: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		duration: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblCourse',
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

export default Module
