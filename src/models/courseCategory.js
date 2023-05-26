import sequelize from '../database/config.js'

const CourseCategory = sequelize.define(
	'TblCourseCategory',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(50),
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)

export const CourseCategorySeeder = () => {
	CourseCategory.bulkCreate([
		{
			name: 'Programación',
		},
		{
			name: 'Ciberseguridad',
		},
		{
			name: 'Diseño',
		},
	])
}

export default CourseCategory
