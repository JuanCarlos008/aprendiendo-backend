const Answer = sequelize.define(
	'Answer',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		user_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'User',
				field: 'id',
			},
			allowNull: false,
		},
		question_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Question',
				field: 'id',
			},
			allowNull: false,
		},
		option_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Option',
				field: 'id',
			},
			allowNull: false,
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
		tableName: 'Answer',
	}
)

export default Answer
