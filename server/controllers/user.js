import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'

import { clientError, serverError500, success } from '../utils/index.js'

/*
	----- START AUTH CONTROLLERS -----
*/

export const login = async (req, res) => {
	serverError500(res, async () => {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if(!user) return clientError(res, 404, "Unauthorized: User does not exist")
		
		const comparePassword = await bcrypt.compare(password, user.password)

		if(!comparePassword) return clientError(res, 401, "Unauthorized: User does not exist")

		const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: '15m' })

		success(res, 200, { result: {
			token,
			id: user._id,
			email: user.email,
			name: user.name,
			birthday: user.birthday,
			phoneNumber: user.phoneNumber,
			message: 'User logged in successfully'
		}})
	})
}

export const register = async (req, res) => {
	serverError500(res, async () => {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if(user) return clientError(res, 409, "Email is already used.")

		const salt = await bcrypt.genSalt(12)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await new User({ ...req.body, password: hashedPassword }).save()

		delete newUser.password

		const token = jwt.sign({ id: newUser._id }, process.env.KEY, { expiresIn: '15m' })

		success(res, 201, { result: {
			token,
			id: newUser._id,
			email: newUser.email,
			name: newUser.name,
			birthday: newUser.birthday,
			phoneNumber: newUser.phoneNumber,
			message: 'User created successfully.'
		}})
	})
}

/*
	----- END AUTH CONTROLLERS -----
*/

export const getAppointmentsPerUser = async (req, res) => {
	serverError500(res, async () => {
		const { userId } = req.params

		const appointments = await User.findById({ _id: userId })
			.populate("appointments")
			.exec()

		success(res, 200, { appointments, message: 'Appointments Retrieved' })
	})
}

export const updateUserInfo = async (req, res) => {
	serverError500(res, async () => {
		const { _id, birthday, email, name, phoneNumber } = req.body
		
		const updatedUser = await User.findByIdAndUpdate({ _id },
			{ $set: { birthday, email, name, phoneNumber } },
			{ new: true }
		)

		success(res, 200, { results: updatedUser, message: 'User Information Updated' })
	})
}
