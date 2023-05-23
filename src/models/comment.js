const Comment = sequelize.define(
	'Comment',
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
		content: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		lesson_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Lesson',
				field: 'id',
			},
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default Comment
