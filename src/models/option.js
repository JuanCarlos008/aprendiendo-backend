const Option = sequelize.define(
	'TblOption',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		text_option: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		correct: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
		question_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblQuetion',
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

export default Option
