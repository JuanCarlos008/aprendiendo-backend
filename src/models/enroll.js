const Enroll = sequelize.define(
	'Enroll',
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
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Course',
				field: 'id',
			},
		},
		enroll_status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'pendiente',
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default Enroll
