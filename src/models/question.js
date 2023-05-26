const Question = sequelize.define(
	'TblQuestion',
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
				model: 'TblExam',
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

export default Question
