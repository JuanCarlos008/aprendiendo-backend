const Exam = sequelize.define(
	'Exam',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
		},
		duration: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Course',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default Exam
