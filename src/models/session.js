/* Table TbSession {
  id int [pk, increment, not null]
  token varchar (500)
  user_id int [ref: > TbUser.id]
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
} */

import { DataTypes } from 'sequelize'
import sequelize from '../database/config'

const Session = sequelize.define(
	'TblSession',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		token: {
			type: DataTypes.STRING,
		},
		refresh_token: {
			type: DataTypes.STRING,
		},

		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'TblUser',
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

export default Session
