const Question = sequelize.define(
	'Question',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		statement: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		exam_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Exam',
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

export default Question
