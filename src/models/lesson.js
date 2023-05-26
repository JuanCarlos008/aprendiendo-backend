const Lesson = sequelize.define(
	'TblLesson',
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
			allowNull: false,
		},
		duration: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		order: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		content_type: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		url_video: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		module_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblModule',
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

export default Lesson
