const Answer = sequelize.define(
	'TblAnswer',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		score: {
			type: Sequelize.DECIMAL(10, 2),
			allowNull: false,
		},
		user_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblUser',
				field: 'id',
			},
			allowNull: false,
		},
		question_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblQuestion',
				field: 'id',
			},
			allowNull: false,
		},
		option_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblOption',
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

export default Answer
