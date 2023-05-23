const Grade = sequelize.define(
	'Grade',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'User',
				field: 'id',
			},
		},
		exam_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Exam',
				field: 'id',
			},
		},
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Course',
				field: 'id',
			},
		},
		score: {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'TbGrade',
	}
)

export default Grade
