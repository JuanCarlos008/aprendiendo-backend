import bcrypt from 'bcrypt'
import User from '../models/user.js'

const creatingDefaultUser = async () => {
	await User.sync()

	const userValidate = await User.findOne({
		where: {
			name: 'admin',
		},
	})

	if (userValidate) return console.log('Default user exists!')

	const hashedPassword = await bcrypt.hash('admin', 10)

	const user = new User({
		name: 'admin',
		email: 'admin@test.com',
		password: hashedPassword,
		role: 'admin',
	})

	try {
		const userCreated = await user.save()

		userCreated?.id
			? console.log('Default user was created')
			: console.log('Default user was not created')
	} catch (error) {
		throw new Error('Filed to create user')
	}
}

creatingDefaultUser()
