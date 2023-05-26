import sequelize from '../database/config.js'

const UserType = sequelize.define(
	'TblUserType',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	}
)

export const UserTypeSeeder = () => {
	UserType.bulkCreate([
		{
			type: 'admin',
		},
		{
			type: 'professional',
		},
		{
			type: 'institution',
		},
	])
}

export default UserType
