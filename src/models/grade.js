const Score = sequelize.define(
	'TblScore',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		score: {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: false,
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
				model: 'TblCourse',
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

export default Grade
