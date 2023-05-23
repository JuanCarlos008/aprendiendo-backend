const Role = sequelize.define(
	'Role',
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
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		tableName: 'users',
	}
)

export default Role
