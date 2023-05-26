const Enrollment = sequelize.define(
	'TblEnrollment',
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
		course_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'TblCourse',
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

export default Enrollment
