import { DataTypes } from 'sequelize'
import sequelize from '../database/config.js'

const Course = sequelize.define(
	'TblCourse',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		cost: {
			type: DataTypes.DECIMAL(10, 2),
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		image_url: {
			type: DataTypes.STRING,
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},

		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'TblCourseCategory',
				field: 'id',
			},
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'tblcourse',
	}
)

export default Course
